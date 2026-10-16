import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company, services } from '../data/site';

const EMAIL = 'globalconnectconsultancy01@gmail.com';

const mainLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const email = company.email?.trim() || EMAIL;
  const isServicePage = pathname.startsWith('/services/');

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenus();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const desktopLink = ({ isActive }) =>
    `relative py-2 text-[13px] font-bold tracking-[.02em] transition-colors duration-200 hover:text-[#57dba0] ${
      isActive ? 'text-[#57dba0]' : 'text-white/85'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b31] text-white shadow-[0_8px_30px_rgba(3,18,35,.14)]">
      {/* Slim information bar: email only, no phone number */}
      <div className="border-b border-white/10 bg-[#041426]">
        <div className="site-container flex min-h-[34px] items-center justify-between gap-3 py-1 text-[11px] font-medium tracking-wide text-slate-300">
          <span className="truncate">Global guidance. Clearer journeys.</span>
          <a
            href={`mailto:${email}`}
            className="hidden max-w-[58%] items-center gap-2 truncate transition-colors hover:text-[#67e9a6] sm:inline-flex"
          >
            <Mail size={13} className="shrink-0 text-[#49d58c]" />
            <span className="truncate">{email}</span>
          </a>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="site-container flex min-h-[84px] items-center justify-between gap-5 py-3">
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Global Connect Consultancy home"
          className="flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 shadow-[0_8px_28px_rgba(0,0,0,.12)] transition-transform hover:scale-[1.02]"
        >
          <img
            src="/global-connect-logo.png"
            alt="Global Connect Consultancy"
            className="h-[48px] w-auto max-w-[170px] object-contain sm:h-[57px] sm:max-w-[205px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          <NavLink to="/" end className={desktopLink}>Home</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-dropdown"
              onClick={() => setServicesOpen((open) => !open)}
              className={`inline-flex items-center gap-1.5 py-2 text-[13px] font-bold tracking-[.02em] transition-colors hover:text-[#57dba0] ${isServicePage || servicesOpen ? 'text-[#57dba0]' : 'text-white/85'}`}
            >
              Services
              <ChevronDown size={15} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id="desktop-services-dropdown"
              className={`absolute left-1/2 top-full w-[286px] -translate-x-1/2 pt-5 transition-all duration-200 ${servicesOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'}`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_24px_60px_rgba(3,19,39,.22)]">
                <div className="px-4 pb-2 pt-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#129767]">Explore our services</div>
                {services.map(({ slug, title, icon: Icon }) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    onClick={closeMenus}
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#09233d] transition-colors hover:bg-[#eef8f3] hover:text-[#0d8a60]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f6f0] text-[#159a67] transition-colors group-hover:bg-[#d9f1e6]">
                      <Icon size={18} />
                    </span>
                    <span className="flex-1">{title}</span>
                    <ArrowUpRight size={15} className="text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#159a67]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(1).map(({ label, to }) => (
            <NavLink key={to} to={to} className={desktopLink}>{label}</NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16aa6b] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_8px_22px_rgba(22,170,107,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#10955d] lg:inline-flex"
        >
          Free Consultation <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => { setMenuOpen((open) => !open); setServicesOpen(false); }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 bg-[#081e35] lg:hidden">
          <div className="site-container flex flex-col gap-1 py-5">
            {mainLinks.slice(0, 1).map(({ label, to }) => (
              <Link key={to} to={to} onClick={closeMenus} className="rounded-lg px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">{label}</Link>
            ))}
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-dropdown"
              className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Services <ChevronDown size={17} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div id="mobile-services-dropdown" className="mb-2 ml-4 space-y-1 border-l-2 border-[#28bd7a]/60 pl-3">
                {services.map(({ slug, title, icon: Icon }) => (
                  <Link key={slug} to={`/services/${slug}`} onClick={closeMenus} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/10 hover:text-white">
                    <Icon size={16} className="text-[#57dba0]" /> {title}
                  </Link>
                ))}
              </div>
            )}
            {mainLinks.slice(1).map(({ label, to }) => (
              <Link key={to} to={to} onClick={closeMenus} className="rounded-lg px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">{label}</Link>
            ))}
            <Link to="/contact" onClick={closeMenus} className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#16aa6b] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#10955d]">
              Free Consultation <ArrowRight size={17} />
            </Link>
            <a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-2 break-all px-4 py-2 text-xs text-slate-300 hover:text-[#57dba0]">
              <Mail size={15} className="shrink-0 text-[#57dba0]" />{email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
