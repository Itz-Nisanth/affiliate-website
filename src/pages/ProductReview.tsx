import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Star, Check, X, ArrowRight, ShoppingCart, Info, ChevronRight, MessageSquare, Share2, Zap } from 'lucide-react';
import { PRODUCTS } from '@/src/data/mockData';
import { formatCurrency, cn, cloakLink } from '@/src/utils/helpers';
import { Helmet } from 'react-helmet-async';

export default function ProductReview() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Review Not Found</h1>
        <Link to="/" className="text-indigo-600 font-bold">Back to Home</Link>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.imageUrl,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.category
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    },
    "offers": {
      "@type": "Offer",
      "url": product.amazonUrl,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{product.title} Review (2026) | AffiliatePro</title>
        <meta name="description" content={product.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link to="/categories" className="hover:text-indigo-600 transition-colors">Categories</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${encodeURIComponent(product.category)}`} className="hover:text-indigo-600 transition-colors">{product.category}</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${encodeURIComponent(product.category)}/${encodeURIComponent(product.subCategory)}`} className="hover:text-indigo-600 transition-colors">{product.subCategory}</Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 font-medium truncate">{product.title}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-12"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                   {product.category}
                </div>
                <div className="text-slate-500 text-sm">Published Feb 26, 2026</div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                {product.title} Review: Is It Still the King in 2026?
              </h1>

              <div className="flex items-center gap-6 mb-12 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className={cn(i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200")} />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{product.rating}/5</span>
                </div>
                <div className="text-slate-400">|</div>
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <MessageSquare size={18} />
                  <span>{product.reviewCount.toLocaleString()} Reviews</span>
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-slate-900 text-white p-8 rounded-3xl mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info size={20} className="text-indigo-400" />
                  The Bottom Line
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {product.description} If you're looking for the absolute best in its class, this is it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={cloakLink(product.amazonUrl)} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                    Check Price on Amazon <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                  <h4 className="text-emerald-900 font-bold text-lg mb-6 flex items-center gap-2">
                    <Check className="text-emerald-600" /> Pros
                  </h4>
                  <ul className="space-y-4">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="flex gap-3 text-emerald-800 text-sm font-medium">
                        <div className="w-5 h-5 bg-emerald-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-emerald-700" />
                        </div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                  <h4 className="text-rose-900 font-bold text-lg mb-6 flex items-center gap-2">
                    <X className="text-rose-600" /> Cons
                  </h4>
                  <ul className="space-y-4">
                    {product.cons.map((con, i) => (
                      <li key={i} className="flex gap-3 text-rose-800 text-sm font-medium">
                        <div className="w-5 h-5 bg-rose-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <X size={12} className="text-rose-700" />
                        </div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content Sections */}
              <div className="prose prose-slate max-w-none mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Performance Analysis</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  After testing the {product.title} for over 30 days in various environments—from busy city streets to quiet office spaces—we've come to a definitive conclusion. The build quality is exceptional, featuring premium materials that feel both durable and lightweight.
                </p>
                <div className="aspect-video rounded-3xl overflow-hidden mb-8">
                  <img src={product.imageUrl} alt="Testing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Features & Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {product.features.map((feature, i) => (
                    <li key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                      <Zap size={18} className="text-indigo-600 shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Table */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={key} className={cn("flex justify-between p-4 px-8", i % 2 === 0 ? "bg-slate-50" : "bg-white")}>
                      <span className="font-bold text-slate-900">{key}</span>
                      <span className="text-slate-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Is the {product.title} worth the price?</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Absolutely. While it's a premium investment, the longevity and performance justify every penny for serious users.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">How does it compare to the previous model?</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">It offers a 20% improvement in battery life and significantly better noise cancellation in high-frequency environments.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Product Card Sidebar */}
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 ring-1 ring-indigo-500/5">
                <img src={product.imageUrl} alt={product.title} className="w-full aspect-square object-cover rounded-2xl mb-6 shadow-md" referrerPolicy="no-referrer" />
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-slate-900 mb-1">{formatCurrency(product.price)}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Highly Rated on Amazon</div>
                </div>
                <div className="space-y-3">
                  <a href={cloakLink(product.amazonUrl)} target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
                    <ShoppingCart size={20} />
                    Buy on Amazon
                  </a>
                  <button className="w-full bg-slate-50 text-slate-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
                    <Share2 size={18} />
                    Share Review
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">On This Page</h4>
                <nav className="space-y-4">
                  {['Summary', 'Pros & Cons', 'Performance', 'Specifications', 'FAQ'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
