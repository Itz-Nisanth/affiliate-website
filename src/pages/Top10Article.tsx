import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Star, Check, X, ShoppingCart, ArrowRight, Award, Zap, Info } from 'lucide-react';
import { PRODUCTS } from '@/src/data/mockData';
import { formatCurrency, cn, cloakLink } from '@/src/utils/helpers';
import { Link } from 'react-router-dom';

export default function Top10Article() {
  // Sort products by rating to create a "Top 10" list
  const topProducts = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>The 10 Best Tech Products of 2026 | AffiliatePro Editorial</title>
        <meta name="description" content="Our editors spent 500+ hours testing hundreds of products to bring you the definitive list of the 10 best tech gadgets you can buy in 2026." />
      </Helmet>

      {/* Editorial Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-primary text-white px-4">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Tech Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 via-brand-primary/60 to-brand-primary" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8 shadow-2xl">
              <Award size={18} />
              <span>2026 Editorial Choice</span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              The <span className="text-brand-accent">Ten</span> <br />
              Best <span className="italic font-serif lowercase text-brand-secondary/60">of</span> 2026
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              After 500+ hours of rigorous testing, our editors have selected the definitive gadgets that define this year.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-brand-primary to-transparent rounded-full" />
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-32">
          {topProducts.map((product, index) => (
            <motion.section 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
              id={`rank-${index + 1}`}
            >
              {/* Oversized Number Background */}
              <div className="absolute -top-24 -left-12 md:-left-24 text-[200px] md:text-[350px] font-black text-brand-primary/5 select-none pointer-events-none leading-none z-0">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Product Image Side */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/5] md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Price</div>
                        <div className="text-2xl font-black text-slate-900">{formatCurrency(product.price)}</div>
                      </div>
                      <a 
                        href={cloakLink(product.amazonUrl)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-brand-primary text-white p-6 rounded-2xl shadow-xl hover:bg-brand-accent transition-all"
                      >
                        <ShoppingCart size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Product Info Side */}
                <div className="lg:col-span-5 pt-8">
                  <div className="inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs mb-4">
                    <Zap size={14} />
                    <span>Ranked #{index + 1} in {product.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    {product.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className={cn(i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200")} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-400">({product.reviewCount.toLocaleString()} Verified Reviews)</span>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {product.description} We've tested this extensively and it stands out for its exceptional {product.features[0].toLowerCase()}.
                  </p>

                  {/* Pros & Cons Mini */}
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Info size={18} className="text-brand-primary" />
                        Why It Made The List
                      </h4>
                      <ul className="space-y-3">
                        {product.pros.map((pro, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
                            <Check size={16} className="text-brand-accent shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={cloakLink(product.amazonUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-all shadow-xl active:scale-95"
                    >
                      Buy on Amazon
                      <ArrowRight size={20} />
                    </a>
                    <Link 
                      to={`/reviews/${product.slug}`}
                      className="flex-1 bg-white border-2 border-slate-100 text-slate-900 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-brand-primary hover:text-brand-primary transition-all"
                    >
                      Read Full Review
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Editorial Footer */}
      <section className="py-32 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-8">How We Test</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Our editorial team maintains strict independence. We purchase every product we test and never accept free samples from manufacturers. This ensures our reviews remain 100% unbiased and focused on your needs.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-brand-accent mb-2">500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hours Testing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-brand-accent mb-2">100%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Unbiased</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-brand-accent mb-2">2026</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Tech</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
