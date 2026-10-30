import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Plane, Sparkles,
  MapPinned, Headset, Files, GraduationCap, Compass, FileCheck2,
  Mail, BadgeCheck, ChevronRight, MoveUpRight
} from 'lucide-react';
import { destinations, faqs, services } from '../data/site';
import './Home.css';

const servicePhotos = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
];
const reasons = [
  { icon: Compass, title: 'Personalized guidance', text: 'We listen to your goals and explain options suited to your plans.' },
  { icon: Files, title: 'Document assistance', text: 'Understand requirements, organize paperwork, and prepare step by step.' },
  { icon: Headset, title: 'Support along the way', text: 'Get clear answers and thoughtful support as you plan your next move.' },
];

const steps = [
  { icon: Mail, title: 'Get in touch', detail: 'Tell us your destination and what you hope to achieve.' },
  { icon: Compass, title: 'Explore your options', detail: 'Understand suitable pathways and relevant requirements.' },
  { icon: FileCheck2, title: 'Prepare documents', detail: 'Make an organized checklist and prepare your paperwork.' },
  { icon: Plane, title: 'Move forward', detail: 'Take the next step with clearer expectations.' },
];

const eyebrow = (children) => <span className="gc-eyebrow"><span className="gc-eyebrow-line" />{children}</span>;

export default function Home() {
  return (
    <main className="gc-home">
      {/* HERO */}
      <section className="gc-hero">
        <div className="gc-hero-glow" aria-hidden="true" />
        <div className="site-container gc-hero-grid">
          <div className="gc-hero-copy">
            <span className="gc-hero-chip"><Sparkles size={15} /> Your world. Your possibilities.</span>
            <h1>Your Global Journey<br /><em>Begins with Global Connect</em></h1>
            <p>Explore study, tourist, family and business immigration opportunities with expert visa consultancy and personalised guidance. We help simplify the immigration process, from visa documentation to application support, making your journey towards global opportunities easier.
</p>
            <div className="gc-actions">
              <Link className="gc-btn gc-btn-green" to="/contact">Start Your Journey <ArrowUpRight size={18} /></Link>
              <Link className="gc-btn gc-btn-ghost" to="/services/study-visa">Explore services <ArrowRight size={18} /></Link>
            </div>
            <div className="gc-hero-points">
              <span><CheckCircle2 size={17} /> Personalised Guidance</span>
              <span><CheckCircle2 size={17} /> Clear Process</span>
              <span><CheckCircle2 size={17} /> Global Opportunities</span>
            </div>
          </div>

          <div className="gc-hero-visual" aria-label="Travel and worldwide opportunities">
            <div className="gc-hero-photo" role="img" aria-label="Scenic destination featuring mountains and a lake" />
            <div className="gc-hero-image-vignette" aria-hidden="true" />
            <div className="gc-stamp"><Globe2 size={25} /><span>GLOBAL<br />CONNECT</span></div>
            <div className="gc-float gc-float-left">
              <div className="gc-float-icon"><GraduationCap size={22} /></div>
              <div><strong>Study across borders</strong><small>Explore a world of learning</small></div>
            </div>
            <div className="gc-float gc-float-right">
              <div className="gc-flags">🇨🇦 &nbsp; 🇦🇺 &nbsp; 🇺🇸 &nbsp; 🇩🇪</div>
              <strong>Discover new horizons</strong>
              <small>One journey, many possibilities</small>
            </div>
            <div className="gc-hero-photo-label"><MapPinned size={15} /> Your journey starts here</div>
          </div>
        </div>
        <div className="gc-hero-bottom-line" />
      </section>

      {/* SERVICES */}
      <section className="gc-section gc-services-section">
        <div className="site-container">
          <div className="gc-section-top">
            <div>
              {eyebrow('What we do')}
              <h2 className="gc-heading">Opening Doors to <span>a World of Opportunities.</span></h2>
              <p className="gc-section-lead">Every journey starts with the right direction. Discover the visa solutions that match your goals, with personalised support and guidance throughout your application process.</p>
            </div>
            <Link to="/contact" className="gc-text-link">Connect with us <ArrowUpRight size={18} /></Link>
          </div>
          <div className="gc-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug} className="gc-service-card">
                  <div className={`gc-service-photo gc-service-photo-${index + 1}`} style={{ backgroundImage: `linear-gradient(180deg,rgba(5,28,56,.03),rgba(5,28,56,.28)),url('${servicePhotos[index]}')` }}>
                    <span className="gc-service-number">0{index + 1}</span>
                    <span className="gc-service-icon"><Icon size={23} strokeWidth={1.9} /></span>
                  </div>
                  <div className="gc-service-body">
                    <span className="gc-service-label">{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="gc-service-more">Explore service <span><MoveUpRight size={18} /></span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="gc-section gc-about-section">
        <div className="site-container gc-about-grid">
          <div className="gc-about-visual">
            <div className="gc-about-image" role="img" aria-label="Travel planning and exploring destinations" />
            <div className="gc-about-quote"><span>“</span> Your Global Journey Starts Here.</div>
            <div className="gc-about-mini"><Globe2 size={18} />Connecting You to New Possibilities</div>
          </div>
          <div className="gc-about-copy">
            {eyebrow('Welcome to Global Connect')}
            <h2 className="gc-heading">Make Your Next <span>Move a Global One.</span></h2>
            <p>At Global Connect Consultancy, we help turn international aspirations into well-planned journeys. Whether you are looking to study abroad, visit another country, reunite with family or explore business opportunities, our team provides clear guidance and personalised support at every stage.</p>
            <div className="gc-about-list">
              <div><BadgeCheck size={21} /><span>Personalised Solutions for Every Journey</span></div>
              <div><BadgeCheck size={21} /><span>Transparent Guidance at Every Step</span></div>
              <div><BadgeCheck size={21} /><span>Dedicated Support from Application to Preparation</span></div>
            </div>
            <Link to="/about" className="gc-btn gc-btn-navy">Discover our story <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
     <section className="gc-section gc-destinations-section">
  <div className="site-container">
    <div className="gc-center-heading">
      {eyebrow('Explore destinations')}
      <h2 className="gc-heading">
        The world is full of <span>possibilities.</span>
      </h2>
      <p className="gc-section-lead">
        Explore destinations that inspire your plans and take the first step toward learning more.
      </p>
    </div>

    <div className="gc-country-grid">
      {destinations.map((d, i) => (
        <Link
          key={d.name}
          to="/contact"
          className={`gc-country-card gc-country-${i + 1}`}
        >
          <img
            src={d.flag}
            alt={`${d.name} flag`}
            className="gc-country-flag"
          />

          <strong>{d.name}</strong>
          <small>{d.subtitle}</small>

          <span className="gc-country-arrow">
            <ArrowUpRight size={17} />
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE */}
      <section className="gc-section gc-benefits-section">
        <div className="site-container">
          <div className="gc-section-top">
            <div>
              {eyebrow('The Global Connect approach')}
              <h2 className="gc-heading">Guidance that puts <span>you first.</span></h2>
              <p className="gc-section-lead">Big plans feel easier when you have clear information and a thoughtful process.</p>
            </div>
            <Globe2 size={90} strokeWidth={.8} className="gc-benefits-globe" />
          </div>
          <div className="gc-benefits-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <div className="gc-benefit-card" key={title}>
                <span className="gc-benefit-counter">0{index + 1}</span>
                <div className="gc-benefit-icon"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="gc-section gc-steps-section">
        <div className="site-container">
          <div className="gc-center-heading">
            {eyebrow('How it works')}
            <h2 className="gc-heading">Four steps to <span>get started.</span></h2>
            <p className="gc-section-lead">A simple process designed to help you plan with more clarity.</p>
          </div>
          <div className="gc-steps-grid">
            {steps.map(({ icon: Icon, title, detail }, index) => (
              <div className="gc-step" key={title}>
                <div className="gc-step-head"><div className="gc-step-icon"><Icon size={24} /></div><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{detail}</p>
                {index < steps.length - 1 && <ChevronRight className="gc-step-next" size={22} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
     
<section className="py-20 md:py-24 bg-[#f5f8f7]">
  <div className="max-w-7xl mx-auto px-5">

    {/* FAQ Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#102b46]">
        FAQ
      </h2>
      <div className="w-16 h-1 bg-[#159b75] mx-auto mt-4 rounded-full"></div>
    </div>

    {/* FAQ List */}
    <div className="max-w-4xl mx-auto flex flex-col gap-4">
      {faqs.map(({ q, a }, index) => (
        <details
          key={q}
          className="group bg-white border border-[#e1eae6] rounded-xl overflow-hidden shadow-sm hover:border-[#159b75] hover:shadow-md transition-all duration-300"
          open={index === 0}
        >
          <summary className="flex items-center gap-4 p-5 md:p-6 cursor-pointer list-none">

            <span className="text-sm font-bold text-[#159b75]">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="flex-1 text-[#102b46] font-semibold text-sm md:text-base">
              {q}
            </span>

            <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-[#edf7f3] text-[#159b75] text-xl transition-all duration-300 group-open:bg-[#159b75] group-open:text-white group-open:rotate-45">
              +
            </span>

          </summary>

          <div className="px-5 md:px-14 pb-6">
            <p className="text-[#687985] text-sm md:text-base leading-7">
              {a}
            </p>
          </div>

        </details>
      ))}
    </div>

    {/* Contact Link */}
    <div className="text-center mt-12">
      <p className="text-[#687985] mb-3">
        Still have questions?
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-[#159b75] font-bold hover:gap-4 transition-all duration-300"
      >
        Contact Our Team
        <ArrowUpRight size={18} />
      </Link>
    </div>

  </div>
</section>


      {/* FINAL CTA */}
      <section className="gc-cta-wrap">
        <div className="site-container">
          <div className="gc-cta">
            <div className="gc-cta-globe" aria-hidden="true"><Globe2 size={280} strokeWidth={.55} /></div>
            <div className="gc-cta-copy">
              {eyebrow('Your next chapter starts here')}
              <h2>Ready to discover what’s <span>possible?</span></h2>
              <p>Tell us what you have in mind. We’ll help you explore your next steps.</p>
            </div>
            <Link to="/contact" className="gc-btn gc-btn-green">Get in touch <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
