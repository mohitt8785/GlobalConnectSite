import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileCheck2,
  Globe2,
  Headphones,
  MapPin,
  ShieldCheck,
  Sparkles,
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
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const points = Array.isArray(service.points) ? service.points : [];
  const steps = Array.isArray(service.steps) ? service.steps : [];
  const serviceName = service.title.replace(/\s*Visa$/i, '');

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(30,119,185,.26),transparent_52%)]" />
        <div className="pointer-events-none absolute -left-40 -bottom-64 h-[600px] w-[600px] rounded-full bg-[#119b68]/10 blur-[95px]" />
        <div className="site-container relative z-10 grid items-center gap-12 py-14 sm:py-20 lg:min-h-[610px] lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:py-24">
          <div className="max-w-[680px]">
            <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 sm:mb-12">
              <Link to="/" className="transition-colors hover:text-green-300">Home</Link>
              <ChevronRight size={14} className="text-slate-500" />
              <span>Services</span>
              <ChevronRight size={14} className="text-slate-500" />
              <span className="text-[#70e1ab]">{service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-sky-100">
              <Sparkles size={15} className="text-[#52d99a]" /> {service.label}
            </div>
            <h1 className="mt-6 font-display text-[46px] font-extrabold leading-[1.08] tracking-tight sm:text-[62px] lg:text-[70px]">
              {serviceName} <span className="text-[#46d990]">Visa.</span>
              <span className="mt-3 block text-[29px] leading-tight text-white sm:text-[38px] lg:text-[40px]">
                Your journey, made clearer.
              </span>
            </h1>
            <p className="mt-7 max-w-[570px] text-base leading-8 text-slate-300 sm:text-lg">
              {service.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary !px-7 !py-4">
                Discuss your plans <ArrowUpRight size={19} />
              </Link>
              <a href="#our-guidance" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-sm font-extrabold text-white transition-colors hover:border-[#69deaa] hover:bg-white/10">
                How we help <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
              {highlights.map(({ icon: HighlightIcon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm">
                  <HighlightIcon size={17} className="shrink-0 text-[#5edb9c]" /> {text}
                </span>
              ))}
            </div>
          </div>

          {/* Self-contained hero illustration: no external image link to break. */}
          <div className="relative mx-auto flex min-h-[390px] w-full max-w-[570px] items-center justify-center sm:min-h-[490px]">
            <div className="absolute h-[330px] w-[330px] rounded-full border border-sky-200/10 sm:h-[450px] sm:w-[450px]" />
            <div className="absolute h-[275px] w-[275px] rounded-full border border-dashed border-sky-200/20 sm:h-[370px] sm:w-[370px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full bg-[#219ee6]/20 blur-[65px] sm:h-[280px] sm:w-[280px]" />

            <div className="relative flex h-[270px] w-[270px] items-center justify-center overflow-hidden rounded-[45px] border border-white/20 bg-gradient-to-br from-[#1586c3] via-[#155e9b] to-[#092543] shadow-[0_35px_85px_rgba(0,0,0,.3)] sm:h-[330px] sm:w-[330px] sm:rounded-[55px]">
              <Globe2 size={295} strokeWidth={0.55} className="absolute -bottom-20 -right-24 text-white/15" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-[32px] border border-white/30 bg-white/15 text-white shadow-[0_15px_55px_rgba(0,0,0,.13)] backdrop-blur-md sm:h-40 sm:w-40">
                <Icon size={89} strokeWidth={1.2} />
              </div>
            </div>

            <div className="absolute left-0 top-5 max-w-[215px] rounded-[20px] border border-slate-100 bg-white p-4 text-[#092039] shadow-[0_20px_60px_rgba(0,0,0,.22)] sm:left-1 sm:top-10 sm:p-5">
              <span className="mb-3 inline-flex rounded-xl bg-[#e9f8f0] p-2.5 text-[#169866]"><MapPin size={22} /></span>
              <p className="font-display text-sm font-extrabold sm:text-base">Explore your options</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Plan with better information.</p>
            </div>
            <div className="absolute bottom-2 right-0 w-[210px] rounded-[20px] border border-slate-100 bg-white p-4 text-[#092039] shadow-[0_20px_60px_rgba(0,0,0,.22)] sm:bottom-10 sm:w-[235px] sm:p-5">
              <div className="mb-3 flex items-center gap-2 text-[#169866]"><BadgeCheck size={22} /><span className="text-[11px] font-bold uppercase tracking-wider">Stay prepared</span></div>
              <p className="font-display text-sm font-extrabold sm:text-base">One step at a time</p>
              <div className="mt-3 flex gap-1.5"><span className="h-1.5 flex-1 rounded-full bg-[#19af78]" /><span className="h-1.5 flex-1 rounded-full bg-[#19af78]" /><span className="h-1.5 flex-1 rounded-full bg-slate-200" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#11965e] via-[#0c795f] to-[#073d52] p-8 text-white shadow-[0_22px_65px_rgba(12,53,71,.13)] sm:min-h-[420px] sm:p-11">
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[55px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full border-[65px] border-white/10" />
            <Globe2 size={260} strokeWidth={0.6} className="pointer-events-none absolute -bottom-16 -right-12 text-white/15" />
            <div className="relative flex h-full min-h-[310px] flex-col justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em]"><Globe2 size={15} /> Global Connect Consultancy</span>
              <div className="max-w-[360px]">
                <span className="font-display text-5xl font-extrabold text-white/35">“</span>
                <h2 className="font-display text-3xl font-extrabold leading-[1.2] sm:text-[38px]">Every new journey starts with a clear plan.</h2>
                <div className="mt-7 h-1 w-14 rounded-full bg-[#8bf0b7]" />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading kicker="Your journey" title={<>Let's make your <span className="text-[#159d6b]">{service.title.toLowerCase()}</span> journey clearer.</>} body={service.intro} />
            <div className="space-y-4">
              {['Understand the steps before you apply', 'Prepare with an organized checklist', 'Get guidance tailored to your plans'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#16324d] sm:text-base"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f8ef] text-[#159d6b]"><Check size={17} /></span>{item}</div>
              ))}
            </div>
            <Link to="/contact" className="btn-dark mt-9">Talk to our team <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* GUIDANCE */}
      <section id="our-guidance" className="section-space scroll-mt-24 bg-[#f3f8fc]">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading kicker="How we can help" title={<>The right guidance for <span className="text-[#159d6b]">your next step.</span></>} body="We help you understand common preparation steps and the documents that may be relevant to your application." />
            <span className="mb-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#15845d] shadow-sm"><CheckCircle2 size={15} /> Support from start to finish</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {points.map((point, index) => {
              const PointIcon = pointIcons[index % pointIcons.length];
              return (
                <div key={`${index}-${point}`} className="group flex items-start gap-5 rounded-[24px] border border-slate-200/70 bg-white p-6 shadow-[0_12px_35px_rgba(15,40,70,.035)] transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_16px_45px_rgba(15,40,70,.1)] sm:p-8">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e9f7ef] text-[#159d6b] transition-colors group-hover:bg-[#159d6b] group-hover:text-white"><PointIcon size={26} strokeWidth={1.8} /></span>
                  <div className="pt-1">
                    <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-[#159d6b]">0{index + 1} / Guidance</span>
                    <h3 className="font-display text-lg font-extrabold leading-snug text-[#0b2540] sm:text-xl">{point}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading center kicker="Step by step" title={<>A simpler way to <span className="text-[#159d6b]">get started.</span></>} body="A practical overview of the process, from the first conversation to preparing your next steps." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={`${index}-${step}`} className="group relative rounded-[23px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b7e8ce] hover:shadow-[0_18px_45px_rgba(15,40,70,.08)] sm:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#092640] text-white"><span className="font-display text-xl font-extrabold">0{index + 1}</span></span>
                  {index < steps.length - 1 ? <ArrowRight size={21} className="text-slate-300 group-hover:text-[#159d6b]" /> : <CheckCircle2 size={23} className="text-[#159d6b]" />}
                </div>
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#169768]">Step {index + 1}</span>
                <h3 className="font-display text-lg font-extrabold leading-snug text-[#092039]">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[#d9e8f4] bg-[#f5f9fd] px-6 py-5 text-sm leading-7 text-slate-600">
            <FileCheck2 size={23} className="mt-1 shrink-0 text-[#168b64]" />
            <p>Visa eligibility, processing times, fees and decisions are determined by the relevant authorities. Always check the latest requirements on official government websites.</p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="section-space bg-[#f3f8fc]">
          <div className="site-container">
            <SectionHeading kicker="Explore more" title={<>Other ways we can <span className="text-[#159d6b]">help you.</span></>} body="Find the service that suits the purpose of your journey." />
            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <Link to={`/services/${related.slug}`} key={related.slug} className="group flex flex-col rounded-[24px] border border-slate-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_20px_45px_rgba(15,40,70,.09)]">
                    <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f7ef] text-[#159d6b] transition-colors group-hover:bg-[#159d6b] group-hover:text-white"><RelatedIcon size={27} /></span>
                    <h3 className="font-display text-xl font-extrabold text-[#092039]">{related.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{related.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-extrabold text-[#148b62]">Explore service <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[60px] border-white/5" />
            <div className="relative">
              <span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#65e6a7]">Let's take the next step</span>
              <h2 className="font-display mt-4 max-w-[650px] text-2xl font-extrabold leading-tight sm:text-4xl">Questions about {service.title}?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Tell us your plans and we'll help you understand the options and next steps.</p>
            </div>
            <Link to="/contact" className="btn-primary relative shrink-0 !px-7 !py-4">Contact us <ArrowUpRight size={19} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
