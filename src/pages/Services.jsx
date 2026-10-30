import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { services } from '../data/site';

const benefits = [
  { icon: ShieldCheck, title: 'Trusted guidance', description: 'Clear and reliable guidance throughout your application journey.' },
  { icon: Globe2, title: 'Global opportunities', description: 'Explore opportunities across popular international destinations.' },
  { icon: Sparkles, title: 'Personalised support', description: 'Solutions and assistance based on your individual requirements.' },
];

const fallback = {
  'study-visa': 'Explore international education opportunities with guidance on university selection and visa applications.',
  'family-visa': 'Get guidance for family reunification and applications to join your loved ones abroad.',
  'tourist-visa': 'Plan your international trip with support for visitor visa applications and documentation.',
  'business-visa': 'Explore international business travel and professional opportunities with expert guidance.',
  'work-visa': 'Take the next step in your career with guidance on overseas employment and work visa applications.',
};

export default function Services() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero: text left, quick links right */}
      <section className="relative overflow-hidden bg-[#071d35] px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#159d6b]/15 blur-[110px]" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Explore our
              <span className="mt-2 block text-[#45d49a]">professional services.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Discover the right opportunities with personalised guidance, reliable support and a clear approach at every step.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#159d6b] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/20 transition-colors hover:bg-[#117e58]"
            >
              Get started
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-white/5 p-3 backdrop-blur">
            <p className="px-4 pb-2 pt-3 text-sm font-semibold text-sky-100">Jump to a service</p>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {s.title}
                <ArrowRight size={16} className="text-[#45d49a]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services: polished cards */}
      <section className="bg-[#f3f8fc] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#092039] sm:text-4xl lg:text-5xl">
              Services designed around <span className="text-[#159d6b]">your goals.</span>
            </h2>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              From choosing the right pathway to preparing your application, we help you move forward with confidence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon || Globe2;
              const points = Array.isArray(service.points) ? service.points.slice(0, 3) : [];
              return (
                <Link
                  key={service.slug}
                  id={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative flex min-h-[400px] scroll-mt-24 flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_12px_35px_rgba(15,40,70,.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0f3556] hover:bg-[#071d35] hover:shadow-[0_28px_60px_rgba(7,29,53,.28)] sm:p-8"
                >
                  {/* decorative watermark icon */}
                  <Icon
                    size={170}
                    strokeWidth={0.7}
                    className="pointer-events-none absolute -right-10 -top-8 text-[#159d6b]/[.07] transition-colors duration-500 group-hover:text-white/[.07]"
                  />

                  {/* icon tile */}
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#159d6b] to-[#0c795f] text-white shadow-[0_12px_28px_rgba(21,157,107,.35)]">
                    <Icon size={28} strokeWidth={1.7} />
                  </span>

                  <h3 className="relative mt-8 text-2xl font-bold tracking-tight text-[#092039] transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                    {service.description || fallback[service.slug?.toLowerCase()] || 'Get personalised guidance and professional support tailored to your requirements.'}
                  </p>

                  {points.length > 0 && (
                    <ul className="relative mt-6 space-y-2.5">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[13px] font-medium leading-5 text-[#16324d] transition-colors duration-500 group-hover:text-slate-200">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f7ef] text-[#159d6b] transition-colors duration-500 group-hover:bg-[#159d6b]/25 group-hover:text-[#45d49a]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="line-clamp-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-6 transition-colors duration-500 group-hover:border-white/10">
                    <span className="text-sm font-bold text-[#148b62] transition-colors duration-500 group-hover:text-[#45d49a]">
                      Explore service
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f7ef] text-[#159d6b] transition-all duration-500 group-hover:bg-[#159d6b] group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  {/* bottom accent bar */}
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#159d6b] to-[#45d49a] transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us: heading left, points stacked right with dividers */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-[#092039] sm:text-5xl">
              Support that makes <span className="text-[#159d6b]">a difference.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              We focus on providing a smooth and supportive experience throughout your journey.
            </p>
          </div>

          <div className="divide-y divide-slate-200 rounded-[24px] border border-slate-200/80 bg-white">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-5 p-6 sm:p-8">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7ef] text-[#159d6b]">
                  <Icon size={25} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#092039]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: horizontal banner */}
      <section className="bg-[#f3f8fc] px-5 py-16 sm:px-8 lg:py-20">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[28px] bg-[#071d35] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-center">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#159d6b]/20 blur-[90px]" />
          <div className="relative max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's plan your <span className="text-[#45d49a]">next step.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Connect with our team and get the guidance you need to move towards your goals.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-[#159d6b] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#117e58]"
          >
            Contact our team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}