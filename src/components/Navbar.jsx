import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company } from '../data/site';

const EMAIL = 'globalconnectconsultancy01@gmail.com';

const mainLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const email = company.email?.trim() || EMAIL;

  const closeMenus = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeMenus();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const desktopLink = ({ isActive }) =>
    `relative flex items-center rounded-full px-5 py-2.5 text-[13px] font-bold tracking-[.02em] transition-all duration-200 ${
      isActive
        ? 'bg-[#16aa6b]/15 text-[#57dba0] shadow-[inset_0_0_0_1px_rgba(87,219,160,.25)]'
        : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b31] text-white shadow-[0_8px_30px_rgba(3,18,35,.18)]">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-[#041426]">
        <div className="site-container flex min-h-[34px] items-center justify-between gap-3 py-1 text-[11px] font-medium tracking-wide text-slate-300">
          <span className="flex items-center gap-2 truncate">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#49d58c]" />
            Global guidance. Clearer journeys.
          </span>
          <a
            href={`mailto:${email}`}
            className="hidden max-w-[58%] items-center gap-2 truncate transition-colors hover:text-[#67e9a6] sm:inline-flex"
          >
            <Mail size={13} className="shrink-0 text-[#49d58c]" />
            <span className="truncate">{email}</span>
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="site-container flex min-h-[84px] items-center justify-between gap-5 py-3">
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Global Connect Consultancy home"
          className="flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 shadow-[0_8px_28px_rgba(0,0,0,.12)]"
        >
          <img
            src="/global-connect-logo.png"
            alt="Global Connect Consultancy"
            className="h-[48px] w-auto max-w-[170px] object-contain sm:h-[57px] sm:max-w-[205px]"
          />
        </Link>

        {/* Desktop nav in a pill container */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 lg:flex"
        >
          {mainLinks.map(({ label, to, end }) => (
            <NavLink key={to} to={to} end={end} className={desktopLink}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          onClick={closeMenus}
          className="group hidden shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#16aa6b] to-[#10955d] py-2 pl-6 pr-2 text-[13px] font-bold text-white shadow-[0_10px_26px_rgba(22,170,107,.3)] transition-colors hover:from-[#10955d] hover:to-[#0d8452] lg:inline-flex"
        >
          Free Consultation
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#10955d] ">
            <ArrowUpRight size={17} />
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100vh-110px)] overflow-y-auto border-t border-white/10 bg-[#081e35] lg:hidden"
        >
          <div className="site-container flex flex-col gap-1.5 py-5">
            {mainLinks.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenus}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors hover:bg-white/10 ${
                    isActive ? 'bg-[#16aa6b]/15 text-[#57dba0]' : 'text-white/90'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#16aa6b] to-[#10955d] px-5 py-4 text-sm font-bold text-white"
            >
              Free Consultation
              <ArrowRight size={17} />
            </Link>

            <a
              href={`mailto:${email}`}
              className="mt-3 inline-flex items-center gap-2 break-all px-4 py-2 text-xs text-slate-300 hover:text-[#57dba0]"
            >
              <Mail size={15} className="shrink-0 text-[#57dba0]" />
              {email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}