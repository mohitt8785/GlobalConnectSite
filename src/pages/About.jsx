import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Eye,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Plane,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const strengths = [
  'Guidance shaped around your individual goals',
  'Clear communication and practical next steps',
  'Thoughtful preparation for study, travel and family plans',
];

const values = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Transparency',
    text: 'Straightforward conversations about options, requirements and the steps involved.',
  },
  {
    icon: HeartHandshake,
    number: '02',
    title: 'Professionalism',
    text: 'Respectful, attentive support with care for each person’s unique circumstances.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Continuous learning',
    text: 'A commitment to staying informed and encouraging checks against official guidance.',
  },
];

const journeySteps = [
  {
    icon: Compass,
    number: '01',
    title: 'Tell us your goals',
    text: 'Share where you want to go and what you hope to achieve.',
  },
  {
    icon: GraduationCap,
    number: '02',
    title: 'Explore your options',
    text: 'Understand the pathways and requirements relevant to you.',
  },
  {
    icon: FileCheck2,
    number: '03',
    title: 'Prepare with clarity',
    text: 'Organize your next steps and documentation with a clear plan.',
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-28 -top-20 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-[110px]" />
        <div className="site-container relative grid items-center gap-12 py-16 sm:py-20 lg:min-h-[590px] lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.17em] text-sky-200">
              <Sparkles size={15} className="text-emerald-400" /> Get to know us
            </span>
            <h1 className="font-display mt-7 max-w-[720px] text-[41px] font-extrabold leading-[1.13] tracking-tight sm:text-[56px] lg:text-[65px]">
              Your dreams. <span className="text-[#3cdb92]">Our commitment</span> to clarity.
            </h1>
            <p className="mt-6 max-w-[590px] text-base leading-8 text-slate-300 sm:text-lg">
              At Global Connect Consultancy, we help people take informed steps toward international education, travel and new opportunities abroad.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary !px-7 !py-4">
                Let's connect <ArrowUpRight size={18} />
              </Link>
              <a href="#our-approach" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                Discover our approach <ArrowRight size={17} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Clear guidance</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Personal attention</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Global outlook</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px] pb-8 sm:pb-12">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#2369a6] via-[#0b3a70] to-[#061a34] shadow-[0_30px_90px_rgba(0,0,0,.25)] sm:min-h-[460px]">
              <div className="pointer-events-none absolute -right-36 -top-28 h-[440px] w-[440px] rounded-full border-[65px] border-white/5" />
              <div className="pointer-events-none absolute -bottom-52 -left-36 h-[470px] w-[470px] rounded-full border-[70px] border-emerald-300/10" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_0_28px_rgba(255,255,255,.035),0_0_0_55px_rgba(255,255,255,.025)] sm:h-72 sm:w-72">
                <Globe2 className="h-[83%] w-[83%] text-sky-100/80" strokeWidth={0.75} />
                <span className="absolute -right-4 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1374bc] shadow-xl"><Plane size={28} /></span>
              </div>
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#09243e]/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                Global Connect Consultancy
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#071d35]/55 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-emerald-300">Beyond borders, with purpose</span>
                <p className="font-display mt-2 text-lg font-extrabold leading-snug sm:text-xl">Better decisions begin with better information.</p>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 text-[#092039] shadow-[0_18px_60px_rgba(0,0,0,.15)] sm:-right-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><HeartHandshake size={23} /></span>
              <div>
                <p className="text-xs font-extrabold">People-first guidance</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Your goals lead the way</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="our-approach" className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[30px] bg-[#eaf6f4] p-8 sm:min-h-[465px]">
              <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#c8efe4] blur-2xl" />
              <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#cbe7ff] blur-2xl" />
              <div className="relative w-full max-w-[370px] rounded-[28px] border border-white bg-white p-7 shadow-[0_25px_65px_rgba(13,48,67,.1)] sm:p-9">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f8ef] text-[#13875d]"><Globe2 size={31} strokeWidth={1.5} /></span>
                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#149366]">Our philosophy</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight text-[#092039] sm:text-[30px]">Every journey deserves a thoughtful start.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">We believe the right path starts with listening, understanding and planning carefully.</p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-bold text-[#0d8760]"><CheckCircle2 size={19} /> Clarity before the next step</div>
              </div>
              <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#168a62] shadow-md"><Compass size={24} /></span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Who we are"
              title={<>Helping you move <span className="text-[#169d6c]">forward with confidence.</span></>}
              body="Global Connect Consultancy offers personalized support for individuals and families exploring opportunities overseas. We take the time to understand your ambitions and explain the options that may fit your plans."
            />
            <p className="max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              Whether you're considering a course abroad, planning a family visit or preparing for travel, our approach is centered on transparent conversations and organized preparation. We want you to feel informed at every stage.
            </p>
            <div className="mt-7 space-y-4">
              {strengths.map((strength) => (
                <div className="flex items-start gap-3" key={strength}>
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#16a16b]" />
                  <p className="text-sm font-semibold leading-7 text-[#253a50] sm:text-base">{strength}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-dark mt-9">Talk to our team <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="section-space bg-[#f3f8fc]">
        <div className="site-container">
          <SectionHeading
            center
            kicker="What drives us"
            title={<>Our purpose, <span className="text-[#169d6c]">our promise.</span></>}
            body="A clear vision and a practical mission guide the way we support each conversation."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[28px] bg-[#09213d] p-8 text-white shadow-sm sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[45px] border-white/5" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#6be9b2]"><Eye size={28} /></span>
              <p className="relative mt-8 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#6be9b2]">Looking ahead</p>
              <h3 className="font-display relative mt-3 text-[28px] font-extrabold sm:text-[34px]">Our vision</h3>
              <p className="relative mt-4 max-w-lg text-sm leading-8 text-slate-300 sm:text-base">To make guidance around international education and travel pathways easier to understand, more accessible and centered on informed choices.</p>
            </div>
            <div className="group relative overflow-hidden rounded-[28px] border border-[#d8eee3] bg-[#e8f8ef] p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full border-[50px] border-[#18a972]/10" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#16865b]"><Target size={28} /></span>
              <p className="relative mt-8 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#16865b]">What we do</p>
              <h3 className="font-display relative mt-3 text-[28px] font-extrabold text-[#092039] sm:text-[34px]">Our mission</h3>
              <p className="relative mt-4 max-w-lg text-sm leading-8 text-[#38546b] sm:text-base">To provide thoughtful, goal-oriented assistance that helps people understand their options, prepare documents and approach each next step with greater clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading
            center
            kicker="What matters to us"
            title={<>Values behind <span className="text-[#169d6c]">every conversation.</span></>}
            body="The principles that shape how we work with people and support their goals."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, number, title, text }) => (
              <div key={title} className="group relative overflow-hidden rounded-[25px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_48px_rgba(9,30,54,.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a8dfc5] hover:shadow-[0_22px_55px_rgba(9,30,54,.1)] sm:p-9">
                <span className="absolute right-8 top-8 font-display text-3xl font-extrabold text-slate-100">{number}</span>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f7ee] text-[#169765] transition-colors group-hover:bg-[#149865] group-hover:text-white"><Icon size={27} /></span>
                <h3 className="font-display mt-8 text-xl font-extrabold text-[#092039]">{title}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{text}</p>
                <div className="mt-7 h-[3px] w-10 rounded-full bg-[#24ad75] transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-space bg-[#f3f8fc]">
        <div className="site-container">
          <SectionHeading
            center
            kicker="Our approach"
            title={<>A simpler path <span className="text-[#169d6c]">starts here.</span></>}
            body="The first steps are about understanding your goals and getting organized."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {journeySteps.map(({ icon: Icon, number, title, text }) => (
              <div key={number} className="rounded-[25px] border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#09213d] text-white"><Icon size={25} /></span>
                  <span className="font-display text-3xl font-extrabold text-slate-200">{number}</span>
                </div>
                <h3 className="font-display mt-8 text-lg font-extrabold text-[#092039]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] bg-[#071d35] px-7 py-12 text-white sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:gap-12 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-white/5" />
            <div className="relative">
              <span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#6be9b2]">Your next chapter</span>
              <h2 className="font-display mt-3 max-w-[690px] text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[35px]">Ready to take the next step toward your goals?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Tell us what you have in mind. We're here to help you explore your options.</p>
            </div>
            <Link to="/contact" className="btn-primary relative shrink-0 !px-7 !py-4">Contact us <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
