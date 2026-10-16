import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BookOpen, CalendarDays,
  ChevronRight, Compass, GraduationCap, FileCheck2, Search, Sparkles, X,
} from 'lucide-react';
import { posts } from '../data/site';

// Static cover photos. You can replace these URLs with your own images later.
const coverPhotos = {
  study: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1500&q=85',
  family: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1500&q=85',
  travel: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=85',
  business: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85',
  documents: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1500&q=85',
  default: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1500&q=85',
};

export function getBlogCover(post) {
  if (post?.image) return post.image;
  const text = `${post?.title || ''} ${post?.category || ''} ${post?.slug || ''}`.toLowerCase();
  // Checklists need a document-themed cover (known to work in the current design).
  if (/document|checklist|paperwork/.test(text)) return coverPhotos.documents;
  if (/stud(y|ies)|university|college|education/.test(text)) return coverPhotos.study;
  if (/family|reunite/.test(text)) return coverPhotos.family;
  if (/business|work/.test(text)) return coverPhotos.business;
  if (/tour|travel|holiday/.test(text)) return coverPhotos.travel;
  return coverPhotos.default;
}

export function getBlogReadTime(post) {
  const words = [post?.title, post?.excerpt, ...(Array.isArray(post?.body) ? post.body : [])]
    .filter(Boolean).join(' ').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function BlogCover({ post, className = '', imageClassName = '' }) {
  const [broken, setBroken] = useState(false);
  const [fallbackTried, setFallbackTried] = useState(false);
  const originalCover = getBlogCover(post);
  const imageUrl = fallbackTried ? coverPhotos.documents : originalCover;

  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br from-[#175886] via-[#0b325c] to-[#071d35] ${className}`}>
      {/* Designed fallback remains visible if a remote photograph fails to load. */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <div className="absolute -left-12 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="absolute -bottom-20 -right-12 h-72 w-72 rounded-full border-[40px] border-[#35ce88]/15" />
        <div className="relative flex flex-col items-center gap-4 text-center text-white/85">
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
            <GraduationCap size={48} strokeWidth={1.35} />
          </div>
          <span className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-white/70"><FileCheck2 size={16}/> Plan your next chapter</span>
        </div>
      </div>
      {!broken && (
        <img
          src={imageUrl}
          alt={post?.title || 'Education and travel planning'}
          loading="eager"
          decoding="async"
          onError={() => {
            if (!fallbackTried && imageUrl !== coverPhotos.documents) setFallbackTried(true);
            else setBroken(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName}`}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061a2e]/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-md sm:bottom-6 sm:left-6">
        <Compass size={13} /> Global Connect Guides
      </div>
    </div>
  );
}

function ArticleCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[25px] border border-slate-200/70 bg-white shadow-[0_16px_50px_rgba(12,37,63,.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b9d6e9] hover:shadow-[0_22px_65px_rgba(12,37,63,.11)]"
    >
      <BlogCover post={post} className="h-[230px] w-full sm:h-[250px]" />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-wider text-[#22865e]">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="normal-case tracking-normal text-slate-500">{getBlogReadTime(post)}</span>
        </div>
        <h3 className="mt-4 font-display text-[21px] font-extrabold leading-[1.35] tracking-tight text-[#092039] transition-colors group-hover:text-[#0a8d69] sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-[14px] leading-7 text-slate-600">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-xs font-medium text-slate-500">{post.date || 'Guide'}</span>
          <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0d8161]">Read article <ArrowUpRight size={17} /></span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All guides');

  const categories = useMemo(
    () => ['All guides', ...new Set(posts.map((post) => post.category).filter(Boolean))],
    []
  );

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) => {
      const categoryMatches = activeCategory === 'All guides' || post.category === activeCategory;
      const text = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return categoryMatches && (!query || text.includes(query));
    });
  }, [search, activeCategory]);

  const showFeatured = !search.trim() && activeCategory === 'All guides' && filteredPosts.length > 0;
  const featured = showFeatured ? filteredPosts[0] : null;
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <>
      {/* TOP HERO */}
      <section className="relative overflow-hidden bg-[#071d35] text-white">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#16aa6a]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[440px] w-[440px] rounded-full bg-[#178be4]/15 blur-[100px]" />
        <div className="site-container relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-sky-200">
              <Sparkles size={15} className="text-green-400" /> Global Connect Journal
            </span>
            <h1 className="font-display mt-7 max-w-[750px] text-[42px] font-extrabold leading-[1.13] tracking-tight sm:text-[58px] lg:text-[65px]">
              Helpful ideas for your <span className="text-[#36d88c]">next big move.</span>
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-8 text-slate-300 sm:text-lg">
              Explore simple guides, practical checklists and useful tips for education, travel and visa planning.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2"><BookOpen size={16} className="text-green-400" /> Practical resources</span>
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-green-400" /> Read at your pace</span>
            </div>
          </div>
          <div className="relative hidden h-[350px] overflow-hidden rounded-[30px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,.24)] lg:block">
            <img
              src={coverPhotos.travel}
              alt="Travel planning with maps and a camera"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061c35]/70 via-[#071d35]/10 to-transparent" />
            <div className="absolute bottom-7 left-8 right-8 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-green-300">Learn • Plan • Explore</p>
                <p className="font-display mt-2 text-2xl font-extrabold">Explore with clarity.</p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#18ac6c] text-white"><ArrowUpRight size={24}/></span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow !text-[#168c65]">Our resources</span>
              <h2 className="font-display mt-3 text-[33px] font-extrabold leading-tight tracking-tight text-[#092039] sm:text-[44px]">
                Latest <span className="text-[#17a56b]">guides & insights.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Find a helpful starting point for your questions, plans and next steps.</p>
            </div>
            <label className="relative block w-full max-w-md">
              <span className="sr-only">Search guides</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19}/>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-sm text-[#092039] shadow-sm outline-none transition focus:border-[#1ba970] focus:ring-4 focus:ring-green-100"
              />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Filter articles by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  activeCategory === category
                    ? 'border-[#092039] bg-[#092039] text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#2aaf78] hover:text-[#16865d]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featured && (
            <div className="mt-10">
              <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#18ac6c]"/><span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#092039]">Featured guide</span></div>
              <Link to={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_20px_55px_rgba(14,39,65,.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(14,39,65,.14)] lg:grid-cols-2">
                <BlogCover post={featured} className="min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]" />
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <span className="inline-flex w-fit rounded-full bg-[#e8f8ef] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-[#138b5c]">{featured.category}</span>
                  <h3 className="font-display mt-5 text-2xl font-extrabold leading-tight tracking-tight text-[#092039] group-hover:text-[#14885f] sm:text-[34px]">{featured.title}</h3>
                  <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{featured.excerpt}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><BookOpen size={15}/>{getBlogReadTime(featured)}</span><span className="inline-flex items-center gap-2"><CalendarDays size={15}/>{featured.date || 'Guide'}</span></div>
                  <span className="mt-8 inline-flex w-fit items-center gap-2 font-display text-sm font-extrabold text-[#0d8760]">Read featured guide <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </div>
          )}

          <div className="mb-6 mt-12 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#092039]">{showFeatured ? 'More to explore' : 'Explore articles'}</h3>
            <span className="text-sm text-slate-500">{filteredPosts.length} {filteredPosts.length === 1 ? 'guide' : 'guides'} available</span>
          </div>
          {gridPosts.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {gridPosts.map((post) => <ArticleCard key={post.slug} post={post}/>) }
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="rounded-[25px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search className="mx-auto text-slate-400" size={30}/>
              <h3 className="font-display mt-4 text-xl font-extrabold text-[#092039]">No guides found</h3>
              <p className="mt-2 text-sm text-slate-500">Try a different keyword or category.</p>
              <button type="button" onClick={() => { setSearch(''); setActiveCategory('All guides'); }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#148b63]"> <X size={16}/> Clear filters</button>
            </div>
          ) : null}

          <p className="mt-10 text-xs leading-6 text-slate-500">These are introductory guides. Please confirm current eligibility, procedures and requirements with official sources for your destination.</p>
        </div>
      </section>

      {/* END CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] bg-[#071d35] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:px-14">
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[65px] border-white/5"/>
            <div className="relative"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#66e6a8]">Still have questions?</span><h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl">Your next step starts with a conversation.</h2><p className="mt-3 text-sm leading-7 text-slate-300">Tell us what you want to achieve. We will help you explore your options.</p></div>
            <Link to="/contact" className="btn-primary relative shrink-0">Contact us <ChevronRight size={18}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}
