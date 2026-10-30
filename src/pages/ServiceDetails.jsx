import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronRight,
  ClipboardCheck, Compass, FileCheck2, Globe2, Headphones, ShieldCheck,
} from 'lucide-react';
import { services } from '../data/site';
import SectionHeading from '../components/SectionHeading';
import NotFound from './NotFound';

const highlights = [
  { icon: Compass, text: 'Personalized guidance' },
  { icon: FileCheck2, text: 'Document preparation' },
  { icon: ShieldCheck, text: 'Clear next steps' },
];

const pointIcons = [Compass, ClipboardCheck, FileCheck2, Headphones];

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug?.toLowerCase() === slug?.toLowerCase());
  if (!service) return <NotFound />;

  const Icon = service.icon || Globe2;
  const related = services.filter((s) => s.slug !== service.slug);
  const points = Array.isArray(service.points) ? service.points : [];
  const steps = Array.isArray(service.steps) ? service.steps : [];
  const serviceName = service.title.replace(/\s*Visa$/i, '');

  return (
    <main>
      {/* HERO: compact, single column */}
      <section className="relative isolate overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(30,119,185,.26),transparent_52%)]" />
        <div className="pointer-events-none absolute -left-40 -bottom-64 h-[600px] w-[600px] rounded-full bg-[#119b68]/10 blur-[95px]" />

        <div className="site-container relative z-10 py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
            <Link to="/" className="transition-colors hover:text-green-300">Home</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <Link to="/services" className="transition-colors hover:text-green-300">Services</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-[#70e1ab]">{service.title}</span>
          </nav>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-6">
              <span className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-white/25 bg-gradient-to-br from-[#1586c3] via-[#155e9b] to-[#092543] sm:flex">
                <Icon size={46} strokeWidth={1.3} />
              </span>
              <div className="max-w-[640px]">
                <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-[54px]">
                  {serviceName}<span className="text-[#46d990]"> Visa.</span>
                </h1>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">Your journey, made clearer.</p>
                <p className="mt-5 text-base leading-8 text-slate-300">{service.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Link to="/contact" className="btn-primary !px-7 !py-4">
                Discuss your plans
                <ArrowUpRight size={19} />
              </Link>
              <a
                href="#our-guidance"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-sm font-extrabold text-white transition-colors hover:border-[#69deaa] hover:bg-white/10"
              >
                How we help
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
            {highlights.map(({ icon: H, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm">
                <H size={17} className="shrink-0 text-[#5edb9c]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BODY: content left, sticky sidebar right */}
      <section className="section-space bg-[#f3f8fc]">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div className="min-w-0 space-y-16">
            {/* Intro */}
            <div>
              <SectionHeading
                kicker="Your journey"
                title={<>Let's make your <span className="text-[#159d6b]">{service.title.toLowerCase()}</span> journey clearer.</>}
                body={service.intro || service.description}
              />
              <div className="space-y-4">
                {['Understand the steps before you apply', 'Prepare with an organized checklist', 'Get guidance tailored to your plans'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#16324d] sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f8ef] text-[#159d6b]">
                      <Check size={17} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Guidance */}
            <div id="our-guidance" className="scroll-mt-24">
              <SectionHeading
                kicker="How we can help"
                title={<>The right guidance for <span className="text-[#159d6b]">your next step.</span></>}
                body="We help you understand common preparation steps and the documents that may be relevant to your application."
              />
              {points.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {points.map((point, i) => {
                    const PI = pointIcons[i % pointIcons.length];
                    return (
                      <div
                        key={`${i}-${point}`}
                        className="group flex items-start gap-4 rounded-[22px] border border-slate-200/70 bg-white p-6 transition-all duration-300 hover:border-green-200 hover:shadow-[0_16px_45px_rgba(15,40,70,.1)]"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9f7ef] text-[#159d6b] transition-colors group-hover:bg-[#159d6b] group-hover:text-white">
                          <PI size={22} strokeWidth={1.8} />
                        </span>
                        <h3 className="font-display pt-1 text-base font-extrabold leading-snug text-[#0b2540] sm:text-lg">{point}</h3>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="rounded-2xl bg-white p-7 text-sm text-slate-600">Contact our team to learn more about this service.</p>
              )}
            </div>

            {/* Process: vertical timeline */}
            <div>
              <SectionHeading
                kicker="Step by step"
                title={<>A simpler way to <span className="text-[#159d6b]">get started.</span></>}
                body="A practical overview of the process, from the first conversation to preparing your next steps."
              />
              {steps.length > 0 ? (
                <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-[#b7e8ce]">
                  {steps.map((step, i) => (
                    <li key={`${i}-${step}`} className="relative flex items-center gap-5">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#092640] font-display text-xl font-extrabold text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-1 items-center justify-between gap-3 rounded-[20px] border border-slate-200 bg-white px-6 py-4">
                        <h3 className="font-display text-base font-extrabold leading-snug text-[#092039] sm:text-lg">{step}</h3>
                        {i === steps.length - 1 && <CheckCircle2 size={22} className="shrink-0 text-[#159d6b]" />}
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-slate-500">Contact us to understand the next steps.</p>
              )}

              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#d9e8f4] bg-[#f5f9fd] px-6 py-5 text-sm leading-7 text-slate-600">
                <FileCheck2 size={23} className="mt-1 shrink-0 text-[#168b64]" />
                <p>
                  Visa eligibility, processing times, fees and decisions are determined by the relevant authorities.
                  Always check the latest requirements on official government websites.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#11965e] via-[#0c795f] to-[#073d52] p-7 text-white">
              <Globe2 size={200} strokeWidth={0.6} className="pointer-events-none absolute -bottom-12 -right-10 text-white/15" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.14em]">
                  <Globe2 size={14} />
                  Global Connect Consultancy
                </span>
                <h2 className="font-display mt-5 text-2xl font-extrabold leading-[1.25]">Every new journey starts with a clear plan.</h2>
                <div className="mt-5 h-1 w-14 rounded-full bg-[#8bf0b7]" />
                <Link to="/contact" className="btn-dark mt-6">
                  Talk to our team
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-[26px] border border-slate-200/80 bg-white p-3">
                <p className="px-4 pb-2 pt-3 text-sm font-extrabold text-[#092039]">Other ways we can help</p>
                {related.map((r) => {
                  const RI = r.icon || Globe2;
                  return (
                    <Link
                      key={r.slug}
                      to={`/services/${r.slug}`}
                      className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-[#f3f8fc]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7ef] text-[#159d6b] transition-colors group-hover:bg-[#159d6b] group-hover:text-white">
                        <RI size={19} />
                      </span>
                      <span className="flex-1 text-sm font-bold text-[#092039]">{r.title}</span>
                      <ArrowUpRight size={16} className="text-[#148b62] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[60px] border-white/5" />
            <div className="relative">
              <h2 className="font-display max-w-[650px] text-2xl font-extrabold leading-tight sm:text-4xl">Questions about {service.title}?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us your plans and we'll help you understand the options and next steps.
              </p>
            </div>
            <Link to="/contact" className="btn-primary relative shrink-0 !px-7 !py-4">
              Contact us
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}