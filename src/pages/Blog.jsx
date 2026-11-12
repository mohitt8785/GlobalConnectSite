import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  UsersRound,
  Plane,
  BriefcaseBusiness,
  FileCheck2,
  Globe2,
  ChevronRight,
  MessageCircle,
  ClipboardList,
  FolderCheck,
  SendHorizontal,
} from 'lucide-react';

import { services, destinations, faqs, whatsappUrl } from '../data/site';

const serviceIcons = {
  'study-visa': GraduationCap,
  'family-visa': UsersRound,
  'tourist-visa': Plane,
  'business-visa': BriefcaseBusiness,
};

const serviceDescriptions = {
  'study-visa':
    'Explore study visa guidance, education planning and application documentation support.',
  'family-visa':
    'Get guidance for family visa applications, supporting documents and application preparation.',
  'tourist-visa':
    'Understand tourist visa requirements and prepare your travel application documents.',
  'business-visa':
    'Get assistance with business visa documentation and application preparation.',
};

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Share Your Plan',
    text: 'Tell us where you want to go and why: study, travel, family or business.',
  },
  {
    icon: ClipboardList,
    title: 'Understand Requirements',
    text: 'We explain the visa category and the documents usually needed for it.',
  },
  {
    icon: FolderCheck,
    title: 'Organise Documents',
    text: 'Prepare and review your paperwork so everything is clear and consistent.',
  },
  {
    icon: SendHorizontal,
    title: 'Review Next Steps',
    text: 'Go through the application steps and official instructions before you submit.',
  },
];

/* Kept because BlogPost.jsx imports these helpers. */
const coverPhotos = {
  documents:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1500&q=85',
};

export function getBlogCover(post) {
  if (post?.image) return post.image;
  return coverPhotos.documents;
}

export function getBlogReadTime(post) {
  const words = [
    post?.title,
    post?.excerpt,
    ...(Array.isArray(post?.body) ? post.body : []),
  ]
    .filter(Boolean)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function BlogCover({ post, className = '', imageClassName = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#071d35] ${className}`}>
      <img
        src={getBlogCover(post)}
        alt={post?.title || 'Visa guidance'}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}

export default function Blog() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#16aa6a]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[440px] w-[440px] rounded-full bg-[#178be4]/15 blur-[100px]" />

        <div className="site-container relative py-20 sm:py-24 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-sky-200">
            <Globe2 size={15} />
            Global Connect Consultancy
          </span>

          <h1 className="font-display mt-7 max-w-4xl text-[42px] font-extrabold leading-[1.13] tracking-tight sm:text-[58px] lg:text-[65px]">
            Your Guide to a
            <span className="text-[#36d88c]"> Global Future.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore visa services, popular destinations and helpful information
            to understand your next steps towards studying, travelling or
            connecting with family abroad.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              Explore Services <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* VISA SERVICES */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !text-[#168c65]">Our Visa Guidance</span>

            <h2 className="font-display mt-3 text-[33px] font-extrabold leading-tight tracking-tight text-[#092039] sm:text-[44px]">
              Explore Our
              <span className="text-[#17a56b]"> Visa Services.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Find the right guidance for your travel, education, family and
              business plans.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] || FileCheck2;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group rounded-[25px] border border-slate-200/70 bg-white p-7 shadow-[0_15px_45px_rgba(12,37,63,.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b9d6e9] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f8ef] text-[#138b5c] transition group-hover:bg-[#138b5c] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="font-display mt-6 text-xl font-extrabold text-[#092039]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {serviceDescriptions[service.slug] || service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0d8760]">
                    Explore Service
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !text-[#168c65]">Explore Countries</span>

            <h2 className="font-display mt-3 text-[33px] font-extrabold text-[#092039] sm:text-[44px]">
              Popular
              <span className="text-[#17a56b]"> Destinations.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Discover destinations for your international education, travel
              and family plans.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 transition hover:border-[#18ac6c] hover:bg-[#effbf4]"
              >
                <Globe2 size={19} className="text-[#168c65]" />
                <span className="font-bold text-[#092039]">
                  {destination.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (new) */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !text-[#168c65]">How It Works</span>

            <h2 className="font-display mt-3 text-[33px] font-extrabold leading-tight text-[#092039] sm:text-[44px]">
              Our Simple
              <span className="text-[#17a56b]"> Process.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-[25px] border border-slate-200/70 bg-white p-7 shadow-[0_15px_45px_rgba(12,37,63,.045)]"
                >
                  <span className="absolute right-6 top-5 font-display text-4xl font-extrabold text-slate-100">
                    {index + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f8ef] text-[#138b5c]">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-extrabold text-[#092039]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISA GUIDANCE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow !text-[#168c65]">Helpful Information</span>

              <h2 className="font-display mt-3 text-[33px] font-extrabold leading-tight text-[#092039] sm:text-[42px]">
                Prepare for Your
                <span className="text-[#17a56b]"> Visa Journey.</span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Every visa application has its own requirements. Proper
                planning and organised documentation can help you prepare your
                application more clearly.
              </p>

              <div className="mt-7 space-y-5">
                {[
                  'Understand the visa category and its requirements.',
                  'Organise the documents relevant to your application.',
                  'Review your application details before submission.',
                  'Check the latest instructions from official authorities.',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileCheck2
                      size={20}
                      className="mt-1 shrink-0 text-[#16a36a]"
                    />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-white/5" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#18ac6c]">
                  <GraduationCap size={34} />
                </div>

                <h3 className="font-display mt-7 text-2xl font-extrabold sm:text-3xl">
                  Planning to Go Abroad?
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-300">
                  Tell us about your plans. Our team can help you understand
                  the available visa guidance and documentation process.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18ac6c] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#11945b]"
                >
                  Talk to Our Team
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !text-[#168c65]">Common Questions</span>

            <h2 className="font-display mt-3 text-[33px] font-extrabold text-[#092039] sm:text-[44px]">
              Frequently Asked
              <span className="text-[#17a56b]"> Questions.</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#092039]">
                  {faq.q}
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-[#168c65] transition-transform group-open:rotate-90"
                  />
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:px-14">
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[65px] border-white/5" />

            <div className="relative">
              <span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#66e6a8]">
                Need Personalised Guidance?
              </span>

              <h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl">
                Your Global Journey Starts Here.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Contact Global Connect Consultancy to discuss your plans and
                understand your next steps.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ChevronRight size={18} />
              </Link>

              {whatsappUrl() && (
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}