import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Plane, Sparkles,
  MapPinned, Headset, Files, GraduationCap, Compass, FileCheck2,
  Mail, BadgeCheck, ChevronRight, MoveUpRight
} from 'lucide-react';
import { destinations, faqs, services } from '../data/site';
import './Home.css';

const servicePhotos = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85',
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
            <h1>Beyond borders.<br /><em>Beyond possibilities.</em></h1>
            <p>Your next chapter could begin anywhere. Discover study, travel, family and business visa pathways with guidance built around your goals.</p>
            <div className="gc-actions">
              <Link className="gc-btn gc-btn-green" to="/contact">Plan your journey <ArrowUpRight size={18} /></Link>
              <Link className="gc-btn gc-btn-ghost" to="/services/study-visa">Explore services <ArrowRight size={18} /></Link>
            </div>
            <div className="gc-hero-points">
              <span><CheckCircle2 size={17} /> Personal attention</span>
              <span><CheckCircle2 size={17} /> Clear guidance</span>
              <span><CheckCircle2 size={17} /> Global outlook</span>
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
              <h2 className="gc-heading">Find your pathway <span>to the world.</span></h2>
              <p className="gc-section-lead">Wherever life takes you, begin with practical advice, thoughtful preparation and a clear plan.</p>
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
            <div className="gc-about-quote"><span>“</span> Every great journey starts with a single step.</div>
            <div className="gc-about-mini"><Globe2 size={18} /> Connecting you worldwide</div>
          </div>
          <div className="gc-about-copy">
            {eyebrow('Welcome to Global Connect')}
            <h2 className="gc-heading">A clearer path to <span>your next chapter.</span></h2>
            <p>At Global Connect Consultancy, we believe that a well-informed decision can open the door to new possibilities. Our focus is to understand your goals and make the preparation process easier to navigate.</p>
            <div className="gc-about-list">
              <div><BadgeCheck size={21} /><span>Guidance shaped around your personal goals</span></div>
              <div><BadgeCheck size={21} /><span>Simple explanations and organized next steps</span></div>
              <div><BadgeCheck size={21} /><span>Support for study, travel, family and business journeys</span></div>
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
            <h2 className="gc-heading">The world is full of <span>possibilities.</span></h2>
            <p className="gc-section-lead">Explore destinations that inspire your plans and take the first step toward learning more.</p>
          </div>
          <div className="gc-country-grid">
            {destinations.map((d, i) => (
              <Link key={d.name} to="/contact" className={`gc-country-card gc-country-${i + 1}`}>
                <span className="gc-country-flag" role="img" aria-label={`${d.name} flag`}>{d.flag}</span>
                <strong>{d.name}</strong>
                <small>{d.subtitle}</small>
                <span className="gc-country-arrow"><ArrowUpRight size={17} /></span>
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
      <section className="gc-section gc-faq-section">
        <div className="site-container gc-faq-grid">
          <div>
            {eyebrow('Frequently asked questions')}
            <h2 className="gc-heading">Questions? <span>We’re here to help.</span></h2>
            <p className="gc-section-lead">A few answers to help you understand what to expect when planning your journey.</p>
            <Link to="/contact" className="gc-btn gc-btn-navy">Ask us a question <ArrowUpRight size={18} /></Link>
          </div>
          <div className="gc-faq-list">
            {faqs.map(({ q, a }, index) => (
              <details key={q} className="gc-faq-item" open={index === 0}>
                <summary><span>{q}</span><span className="gc-faq-toggle">+</span></summary>
                <p>{a}</p>
              </details>
            ))}
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
