import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS } from '@/src/data/mockData';

export default function Sitemap() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Product Reviews', path: '/reviews' },
    { name: 'Comparison Guides', path: '/comparison' },
    { name: 'Best Deals', path: '/deals' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Affiliate Disclosure', path: '/disclosure' },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Sitemap | AffiliatePro</title>
      </Helmet>
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Main Pages</h2>
              <ul className="space-y-4">
                {pages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-slate-600 hover:text-brand-primary transition-colors font-medium">{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Product Reviews</h2>
              <ul className="space-y-4">
                {PRODUCTS.map(product => (
                  <li key={product.id}>
                    <Link to={`/reviews/${product.slug}`} className="text-slate-600 hover:text-brand-primary transition-colors font-medium">{product.title}</Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-black text-slate-900 mb-6 mt-12 uppercase tracking-widest text-xs">Blog Posts</h2>
              <ul className="space-y-4">
                {BLOG_POSTS.map(post => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.slug}`} className="text-slate-600 hover:text-brand-primary transition-colors font-medium">{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
