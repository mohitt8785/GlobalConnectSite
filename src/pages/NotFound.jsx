import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <section className="site-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center"><span className="font-display text-8xl font-extrabold text-sky-300">404</span><h1 className="font-display mt-5 text-3xl font-extrabold text-ink">Page not found</h1><p className="mt-3 text-slate-600">We couldn't find the page you're looking for.</p><Link to="/" className="btn-dark mt-8"><ArrowLeft size={18}/> Back to home</Link></section>; }
