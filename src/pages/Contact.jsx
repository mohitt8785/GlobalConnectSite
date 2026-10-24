import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { company, services } from '../data/site';

// Vite exposes only variables prefixed with VITE_ in the browser bundle.
// Use the public EmailJS key only; never put private keys in frontend code.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

const startingForm = {
  name: '',
  email: '',
  service: services[0]?.title || 'Study Visa',
  message: '',
};

const highlights = [
  { icon: MessageSquareText, title: 'Tell us your plans', text: 'Share your goals and preferred destination.' },
  { icon: ShieldCheck, title: 'Clear information', text: 'Get practical guidance about possible next steps.' },
  { icon: CheckCircle2, title: 'Plan with confidence', text: 'Understand what to prepare for your journey.' },
];

export default function Contact() {
  const [form, setForm] = useState(startingForm);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const submitting = useRef(false);

  const email = company.email || 'globalconnectconsultancy01@gmail.com';

  function update(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setResult(null);
  }

  async function submit(event) {
    event.preventDefault();
    if (submitting.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setResult({
        type: 'error',
        text: `Online enquiries are not configured yet. Please email us at ${email}.`,
      });
      return;
    }

    const name = form.name.trim();
    const visitorEmail = form.email.trim();
    const message = form.message.trim();
    if (!name || !visitorEmail || !message) {
      setResult({ type: 'error', text: 'Please complete all required fields before submitting.' });
      return;
    }

    submitting.current = true;
    setSending(true);
    setResult(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `New ${form.service} enquiry`,
          name,
          email: visitorEmail,
          reply_to: visitorEmail,
          service: form.service,
          message,
          time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          limitRate: { id: 'global-connect-contact', throttle: 10000 },
        },
      );

      setResult({
        type: 'success',
        text: 'Your enquiry was sent successfully. Our team will get back to you by email.',
      });
      setForm({ ...startingForm });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setResult({
        type: 'error',
        text: `We could not send your enquiry. Please try again or email us directly at ${email}.`,
      });
    } finally {
      submitting.current = false;
      setSending(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute -left-36 bottom-[-190px] h-[470px] w-[470px] rounded-full bg-[#0fa36b]/15 blur-[95px]" />
        <div className="pointer-events-none absolute -right-32 top-[-220px] h-[620px] w-[620px] rounded-full bg-[#208ce1]/20 blur-[105px]" />
        <div className="site-container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link to="/" className="transition hover:text-green-300">Home</Link>
              <ChevronRight size={14} />
              <span className="text-green-300">Contact</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-sky-200">
              <Sparkles size={15} className="text-green-400" /> We're here to help
            </span>
            <h1 className="font-display mt-7 max-w-[730px] text-[45px] font-extrabold leading-[1.12] tracking-tight sm:text-[59px] lg:text-[68px]">
              Big journeys begin <span className="text-[#40d996]">with a conversation.</span>
            </h1>
            <p className="mt-6 max-w-[580px] text-base leading-8 text-slate-300 sm:text-lg">
              Have a question about studying, travelling, or exploring opportunities abroad? Tell us your plans and take the next step with clarity.
            </p>
            <a href="#contact-form" className="btn-primary mt-9 !px-7 !py-4">
              Send an enquiry <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="relative mx-auto flex min-h-[310px] w-full max-w-[510px] items-center justify-center sm:min-h-[420px]">
            <div className="absolute h-[285px] w-[285px] rounded-full border border-sky-200/15 sm:h-[380px] sm:w-[380px]" />
            <div className="absolute h-[245px] w-[245px] rounded-full border border-dashed border-sky-200/25 sm:h-[325px] sm:w-[325px]" />
            <div className="absolute flex h-[210px] w-[210px] items-center justify-center rounded-full bg-gradient-to-br from-[#187cbf] via-[#125e96] to-[#09294d] shadow-[0_28px_100px_rgba(21,145,215,.23)] sm:h-[275px] sm:w-[275px]">
              <Globe2 className="h-[74%] w-[74%] text-sky-100/85" strokeWidth={1} />
            </div>
            <div className="absolute bottom-3 left-0 max-w-[225px] rounded-[22px] border border-white/10 bg-white px-5 py-4 text-[#092039] shadow-[0_22px_65px_rgba(0,0,0,.2)] sm:bottom-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700"><Mail size={20} /></div>
              <p className="font-display text-base font-extrabold">We're one email away.</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Share your questions, goals and next steps.</p>
            </div>
            <span className="absolute right-0 top-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0eaa6a] px-4 py-3 text-xs font-extrabold text-white shadow-xl sm:right-3 sm:top-10">
              <CheckCircle2 size={17} /> Global guidance
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + EMAIL FORM */}
      <section id="contact-form" className="scroll-mt-20 bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
          <div>
            <span className="eyebrow !text-[#148c62]">Let's connect</span>
            <h2 className="font-display mt-4 max-w-[560px] text-[34px] font-extrabold leading-[1.2] tracking-tight text-[#092039] sm:text-[44px]">
              Let's talk about <span className="text-[#14a66c]">your next move.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              We're happy to hear about your study, family, travel, or business plans. Reach us by email or send your enquiry directly using the form.
            </p>

            <a
              href={`mailto:${email}`}
              className="group mt-9 flex items-start gap-4 rounded-[23px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(11,36,63,.04)] transition-all hover:-translate-y-0.5 hover:border-green-300 hover:shadow-lg sm:p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e6f8ef] text-[#118a5d]"><Mail size={25} /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-extrabold uppercase tracking-[.15em] text-slate-500">Email us</span>
                <span className="mt-2 block text-sm font-extrabold leading-6 text-[#092039] sm:text-base" style={{ overflowWrap: 'anywhere' }}>{email}</span>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-[#118a5d]">Write an email <ArrowUpRight size={15} /></span>
              </span>
            </a>

            {company.address && company.map && (
              <a
                href={company.map}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-start gap-4 rounded-[23px] border border-slate-200 bg-white p-5 transition-all hover:border-green-300 sm:p-6"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><MapPin size={24} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-extrabold uppercase tracking-[.15em] text-slate-500">Our office</span>
                  <span className="mt-2 block text-sm font-bold leading-6 text-[#092039]">{company.address}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-[#118a5d]">Get directions <ArrowUpRight size={15} /></span>
                </span>
              </a>
            )}

            <div className="mt-9 rounded-[24px] bg-[#071d35] p-7 text-white sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-300"><Globe2 size={26} /></div>
              <h3 className="font-display text-xl font-extrabold">Global plans. Personal guidance.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Your questions deserve thoughtful answers. Let's begin with what matters most to you.</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_22px_75px_rgba(12,37,63,.07)] sm:p-9 lg:p-11">
            <div className="mb-8 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f9f0] text-[#11935e]"><Send size={23} /></span>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#092039] sm:text-[29px]">Send us an enquiry</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">Fill in your details and send your enquiry directly to our team.</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Full name <span className="text-red-500">*</span>
                  <input name="name" value={form.name} onChange={update} required minLength={2} maxLength={100} autoComplete="name" placeholder="Enter your full name" className="field-input !mt-2 !rounded-2xl !bg-[#f8fafc]" />
                </label>
                <label className="field-label">
                  Email address <span className="text-red-500">*</span>
                  <input name="email" type="email" value={form.email} onChange={update} required maxLength={254} autoComplete="email" placeholder="you@example.com" className="field-input !mt-2 !rounded-2xl !bg-[#f8fafc]" />
                </label>
              </div>

              <label className="field-label">
                Interested service <span className="text-red-500">*</span>
                <select name="service" value={form.service} onChange={update} required className="field-input !mt-2 !rounded-2xl !bg-[#f8fafc]">
                  {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
                </select>
              </label>

              <label className="field-label">
                Your message <span className="text-red-500">*</span>
                <textarea name="message" value={form.message} onChange={update} required rows={5} maxLength={1500} placeholder="Tell us about your preferred destination, plans, or questions..." className="field-input !mt-2 resize-y !rounded-2xl !bg-[#f8fafc]" />
              </label>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full !justify-center !py-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? 'Sending enquiry...' : 'Send Enquiry'}
                <ArrowUpRight size={19} />
              </button>
              <p className="text-center text-xs leading-6 text-slate-500">
                By submitting, you agree to share these details with our team so we can respond to your enquiry.
              </p>
              {result && (
                <div
                  role={result.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`rounded-2xl border p-4 text-sm leading-6 ${result.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-700'}`}
                >
                  <div className="flex items-start gap-3">
                    {result.type === 'success' ? <CheckCircle2 size={20} className="mt-0.5 shrink-0" /> : <Mail size={20} className="mt-0.5 shrink-0" />}
                    <p>{result.text}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="mb-10 text-center">
            <span className="eyebrow !text-[#148c62]">What happens next</span>
            <h2 className="font-display mt-3 text-[30px] font-extrabold tracking-tight text-[#092039] sm:text-[40px]">A simple way to <span className="text-[#14a66c]">get started.</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">Share your plans, explore the options, and prepare with more clarity.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="group rounded-[24px] border border-slate-100 bg-[#f7fafd] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-lg sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#159b6b] shadow-sm"><Icon size={26} /></span>
                  <span className="font-display text-2xl font-extrabold text-slate-200">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-[#092039]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-7 overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:px-14">
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[65px] border-white/5" />
            <div className="relative">
              <span className="text-[11px] font-extrabold uppercase tracking-[.2em] text-green-300">Your journey starts here</span>
              <h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl">Every great opportunity begins with a first step.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Write to us and let's discuss your goals.</p>
            </div>
            <a href={`mailto:${email}`} className="btn-primary relative shrink-0">Email our team <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
