import { ArrowRight, ArrowUpRight, Globe2, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, services } from '../data/site';

const FALLBACK_EMAIL = 'globalconnectconsultancy01@gmail.com';

export default function Footer() {
  const email = company.email?.trim() || FALLBACK_EMAIL;
  const [emailName, emailDomain] = email.split('@');
  const quickLinks = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#06182b] text-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#0e9769] via-[#28c883] to-[#1479b9]" />
      <div className="pointer-events-none absolute -right-40 top-5 h-[360px] w-[360px] rounded-full border-[65px] border-white/[.025]" />

      <div className="site-container relative grid gap-x-8 gap-y-12 py-14 sm:py-16 lg:grid-cols-[1.25fr_.7fr_.85fr_1.45fr] lg:gap-x-10 lg:py-20">
        {/* Brand */}
        <div>
          <Link to="/" aria-label={`${company.name || 'Global Connect Consultancy'} home`} className="inline-flex rounded-xl bg-white px-3 py-2 shadow-lg transition-transform hover:-translate-y-0.5">
            <img
              src="/global-connect-logo.png"
              alt="Global Connect Consultancy"
              className="h-[58px] w-auto max-w-[215px] object-contain"
            />
          </Link>
          <p className="mt-6 max-w-[310px] text-[14px] leading-7 text-slate-300">
            Thoughtful guidance for overseas education, travel, family and business journeys.
          </p>
          <Link to="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#68e7a8] transition-colors hover:text-white">
            Talk to our team <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="mb-6 text-[15px] font-extrabold text-white">Quick links</h2>
          <div className="flex flex-col items-start gap-3.5">
            {quickLinks.map(([label, to]) => (
              <Link key={to} to={to} className="text-[13px] text-slate-300 transition-colors hover:text-[#68e7a8]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-6 text-[15px] font-extrabold text-white">Visa services</h2>
          <div className="flex flex-col items-start gap-3.5">
            {services.map(({ slug, title }) => (
              <Link key={slug} to={`/services/${slug}`} className="text-[13px] text-slate-300 transition-colors hover:text-[#68e7a8]">
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact: no company phone number is shown */}
        <div className="min-w-0">
          <h2 className="mb-6 text-[15px] font-extrabold text-white">Get in touch</h2>
          <a
            href={`mailto:${email}`}
            aria-label={`Email Global Connect Consultancy at ${email}`}
            className="group flex max-w-full items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[.045] px-4 py-4 transition-all hover:border-[#36c98b]/40 hover:bg-white/[.075]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#159a68]/15 text-[#68e7a8]">
              <Mail size={19} />
            </span>
            <span className="min-w-0 text-[13px] leading-6">
              <span className="block font-semibold text-white group-hover:text-[#78eab1]">Send us an email</span>
              <span className="mt-1 block break-words text-slate-300 [overflow-wrap:anywhere]">{emailName}</span>
              {emailDomain && <span className="block text-slate-300">@{emailDomain}</span>}
            </span>
          </a>
          {company.address && (
            company.map ? (
              <a href={company.map} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-300 transition-colors hover:text-[#68e7a8]">
                <MapPin size={17} className="mt-1 shrink-0 text-[#68e7a8]" />
                <span className="min-w-0 break-words">{company.address}</span>
              </a>
            ) : (
              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-300">
                <MapPin size={17} className="mt-1 shrink-0 text-[#68e7a8]" />
                <span className="min-w-0 break-words">{company.address}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#041426]/60">
        <div className="site-container flex flex-col items-center justify-between gap-3 py-5 text-center text-[12px] text-slate-400 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {company.name || 'Global Connect Consultancy'}. All rights reserved.</span>
          <span className="inline-flex items-center gap-2"><Globe2 size={15} className="text-[#68e7a8]" /> Connecting You Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
