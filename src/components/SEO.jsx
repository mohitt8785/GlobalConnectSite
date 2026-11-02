
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { posts, services } from '../data/site';

const SITE = 'https://globalconnectconsultancy.in';
const BRAND = 'Global Connect Consultancy';

const pageMetadata = {
  '/': {
    title: 'Global Connect Consultancy | Study, Tourist, Family & Business Visa',
    description: 'Get personalised guidance for study, tourist, family and business visa applications with Global Connect Consultancy.',
  },
  '/about': {
    title: 'About Us | Global Connect Consultancy',
    description: 'Learn about Global Connect Consultancy and our personalised approach to study, tourist, family and business visa guidance.',
  },
  '/services': {
    title: 'Visa Consultancy Services | Global Connect Consultancy',
    description: 'Explore professional visa consultancy services for study, tourist, family and business visas with personalised immigration guidance and application support.',
  },
  '/blog': {
    title: 'Visa & Study Abroad Blog | Global Connect Consultancy',
    description: 'Read practical guides about study abroad planning, visa documents and international travel preparation.',
  },
  '/contact': {
    title: 'Contact Us | Global Connect Consultancy',
    description: 'Contact Global Connect Consultancy for guidance with study, tourist, family and business visa applications.',
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`
  );

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/';
    
    let metadata = pageMetadata[path];

    if (path.startsWith('/services/')) {
      const slug = path.split('/')[2];
      const service = services.find(item => item.slug === slug);

      if (service) {
        metadata = {
          title: `${service.title} Consultancy | ${BRAND}`,
          description: service.description,
        };
      }
    }

    if (path.startsWith('/blog/')) {
      const slug = path.split('/')[2];
      const post = posts.find(item => item.slug === slug);

      if (post) {
        metadata = {
          title: `${post.title} | ${BRAND}`,
          description: post.excerpt,
        };
      }
    }

    const notFound = !metadata;

    metadata = metadata || {
      title: `Page Not Found | ${BRAND}`,
      description: 'The requested page could not be found.',
    };

    const canonical = `${SITE}${path}`;

    document.title = metadata.title;

    setMeta('name', 'description', metadata.description);
    setMeta('name', 'robots', notFound ? 'noindex, follow' : 'index, follow');

    setLink('canonical', canonical);

    setMeta('property', 'og:type', path.startsWith('/blog/') ? 'article' : 'website');
    setMeta('property', 'og:site_name', BRAND);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', `${SITE}/global-connect-logo.png`);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    setMeta('name', 'twitter:image', `${SITE}/global-connect-logo.png`);
  }, [pathname]);

  return null;
}
