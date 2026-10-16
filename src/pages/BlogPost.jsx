import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, ShieldCheck } from 'lucide-react';
import { posts } from '../data/site';
import { BlogCover, getBlogReadTime } from './Blog';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <NotFound />;

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const paragraphs = Array.isArray(post.body) ? post.body : [];

  return (
    <>
      {/* ARTICLE HEADER */}
      <section className="relative overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0c75c5]/20 blur-[110px]" />
        <div className="site-container relative py-14 sm:py-20 lg:py-24">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-green-300">Home</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <Link to="/blog" className="transition hover:text-green-300">Guides</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-green-300">{post.category}</span>
          </nav>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#4fd397]/30 bg-[#22b76e]/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.15em] text-[#75ebb0]">{post.category}</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-300"><BookOpen size={15}/>{getBlogReadTime(post)}</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-300"><CalendarDays size={15}/>{post.date || 'Guide'}</span>
          </div>
          <h1 className="font-display mt-6 max-w-[940px] text-[36px] font-extrabold leading-[1.17] tracking-tight sm:text-[52px] lg:text-[62px]">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{post.excerpt}</p>
          <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-green-300 transition hover:gap-3"><ArrowLeft size={17}/> Back to all guides</Link>
        </div>
      </section>

      <section className="bg-[#f6f9fc] pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="site-container">
          {/* LARGE IMAGE */}
          <BlogCover post={post} className="h-[270px] rounded-[24px] shadow-[0_18px_50px_rgba(9,31,53,.1)] sm:h-[400px] lg:h-[510px]" />

          <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-14">
            <article className="min-w-0 rounded-[26px] border border-slate-100 bg-white px-6 py-9 shadow-[0_12px_45px_rgba(11,37,61,.04)] sm:px-10 sm:py-12 lg:px-12">
              <div className="mb-8 flex items-center gap-3 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f7f0] text-[#129763]"><Compass size={23}/></span>
                <div><p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#179e69]">Global Connect Consultancy</p><p className="mt-1 text-xs text-slate-500">Practical guidance and resources</p></div>
              </div>
              <h2 className="font-display mb-6 text-2xl font-extrabold leading-tight text-[#092039] sm:text-[32px]">A little clarity goes a long way.</h2>
              <p className="mb-8 border-l-4 border-[#24b778] pl-5 text-base font-medium leading-8 text-[#36536b] sm:text-lg">{post.excerpt}</p>
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[15px] leading-[1.95] text-slate-700 sm:text-base">{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 rounded-[20px] border border-[#d9f0e4] bg-[#f0fbf5] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[#10845b]"><ShieldCheck size={22}/><span className="font-display text-sm font-extrabold">Important to know</span></div>
                <p className="mt-3 text-sm leading-7 text-slate-600">This article is general information, not visa or legal advice. Eligibility and document requirements may change. Always check current guidance from the relevant official authority before applying.</p>
              </div>
              <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#092039] hover:text-[#158b60]"><ArrowLeft size={18}/> All guides</Link>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#12895f] hover:text-[#092039]">Ask a question <ArrowUpRight size={17}/></Link>
              </div>
            </article>

            {/* STICKY SIDEBAR */}
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[23px] border border-slate-100 bg-white p-7 shadow-sm">
                <span className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#168b63]">Reading details</span>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3"><BookOpen size={19} className="mt-0.5 text-[#1a9e6d]"/><div><p className="text-xs text-slate-500">Estimated reading time</p><p className="mt-1 text-sm font-bold text-[#092039]">{getBlogReadTime(post)}</p></div></div>
                  <div className="flex items-start gap-3"><Compass size={19} className="mt-0.5 text-[#1a9e6d]"/><div><p className="text-xs text-slate-500">Topic</p><p className="mt-1 text-sm font-bold text-[#092039]">{post.category}</p></div></div>
                  <div className="flex items-start gap-3"><CheckCircle2 size={19} className="mt-0.5 text-[#1a9e6d]"/><div><p className="text-xs text-slate-500">Type</p><p className="mt-1 text-sm font-bold text-[#092039]">Helpful guide</p></div></div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[23px] bg-[#071d35] p-7 text-white">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[32px] border-white/5"/>
                <span className="relative text-[11px] font-bold uppercase tracking-[.16em] text-green-300">Need guidance?</span>
                <h3 className="font-display relative mt-3 text-2xl font-extrabold leading-tight">Have questions about your plans?</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-300">Reach out to Global Connect Consultancy and discuss your next steps.</p>
                <Link to="/contact" className="btn-primary relative mt-6 !w-full">Contact us <ArrowUpRight size={17}/></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="site-container">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div><span className="eyebrow !text-[#179c6d]">Keep exploring</span><h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[#092039] sm:text-4xl">You may also like</h2></div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#12885d]">View all guides <ArrowRight size={17}/></Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="group flex overflow-hidden rounded-[22px] border border-slate-100 bg-[#f8fbfe] transition-all hover:-translate-y-1 hover:shadow-lg">
                  <BlogCover post={item} className="hidden w-[35%] shrink-0 sm:block" />
                  <div className="flex-1 p-6 sm:p-7"><p className="text-[11px] font-extrabold uppercase tracking-wider text-[#168b63]">{item.category}</p><h3 className="font-display mt-3 text-lg font-extrabold leading-snug text-[#092039] group-hover:text-[#13835e]">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#138b60]">Read guide <ArrowUpRight size={16}/></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
