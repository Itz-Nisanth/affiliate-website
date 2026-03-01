import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Star, Laptop, Home as HomeIcon, HeartPulse, Gamepad2, Utensils, Smartphone, Award } from 'lucide-react';
import { PRODUCTS, BLOG_POSTS } from '@/src/data/mockData';
import ProductCard from '@/src/components/ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { name: 'Electronics', icon: <Laptop size={24} /> },
    { name: 'Home Appliances', icon: <HomeIcon size={24} /> },
    { name: 'Kitchen', icon: <Utensils size={24} /> },
    { name: 'Cooking', icon: <Utensils size={24} /> },
    { name: 'Health', icon: <HeartPulse size={24} /> },
    { name: 'Gaming', icon: <Gamepad2 size={24} /> },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-40 pb-24 overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] bg-indigo-100/30 rounded-full blur-[150px] -rotate-12" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-emerald-50/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-8 shadow-soft border border-indigo-100/50">
              <Zap size={14} className="animate-pulse" />
              <span>The Future of Shopping is Here</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-black text-slate-900 leading-[0.85] mb-8 tracking-tighter uppercase">
              Shop with <br />
              <span className="text-indigo-600">Precision.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              We don't just review products. We stress-test them in real-world scenarios so you can buy with absolute confidence.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/best-of-2026"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-indigo-200 active:scale-95 flex items-center gap-3 group"
              >
                Best of 2026
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/categories"
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-soft"
              >
                Browse Categories
              </Link>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-xl"
                    alt="User"
                  />
                ))}
              </div>
              <div>
                <div className="text-xl font-black text-slate-900 leading-none mb-1">50k+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Readers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:flex justify-end items-center pr-8"
          >
            <div className="relative w-full max-w-[580px] z-10 bg-white p-5 rounded-[4rem] shadow-hover border border-slate-100 animate-float">
              <div className="overflow-hidden rounded-[3.2rem] aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
                  alt="Featured Product"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge - Scaled down for better balance */}
              <div className="absolute -bottom-6 -left-6 glass p-5 rounded-[2rem] shadow-hover flex items-center gap-4 animate-bounce-slow z-20">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-xl shadow-indigo-200">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.2em] mb-0.5">Trending</div>
                  <div className="text-lg font-black text-slate-900">Sony XM5</div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl animate-pulse -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deal of the Day Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Deal Background"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                  <Star size={14} className="fill-white" />
                  <span>Deal of the Day</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
                  Save <span className="text-indigo-500">$200</span> on <br />
                  MacBook Air M3
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-md">
                  The lowest price ever recorded for the world's most popular laptop. Limited time offer.
                </p>
                <div className="flex items-center gap-8">
                  <a 
                    href="#" 
                    className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all active:scale-95"
                  >
                    Claim Deal
                  </a>
                  <div className="hidden sm:block">
                    <div className="text-white font-black text-2xl mb-1">08:42:15</div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Time Remaining</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  alt="MacBook Air"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                Explore <span className="text-indigo-600">Categories</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                From high-end electronics to essential home appliances, find the best products in every category.
              </p>
            </div>
            <Link 
              to="/categories" 
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors group"
            >
              View All Categories
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                to={`/category/${encodeURIComponent(cat.name)}`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-soft hover:shadow-hover transition-all border border-slate-100 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:bg-indigo-600 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors shadow-sm">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
                    <p className="text-sm text-slate-400 font-medium">Browse the latest {cat.name.toLowerCase()} reviews and deals.</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                Our <span className="text-indigo-600">Top Picks</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                The absolute best products we've tested this month. No compromises, just pure quality and performance.
              </p>
            </div>
            <Link 
              to="/categories" 
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors group"
            >
              View All Reviews
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} featured={product.isBestOverall} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Editorial Section */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Editorial Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <Award size={14} />
                <span>Editorial Special</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                The Definitive <br />
                <span className="text-indigo-500">Top 10</span> of 2026
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                We've narrowed down thousands of gadgets to just ten. These are the products that actually changed how we live, work, and play this year.
              </p>
              <Link
                to="/best-of-2026"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all active:scale-95 group"
              >
                Read the Full List
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover"
                  alt="Top 10 Tech"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-indigo-600 p-10 rounded-full shadow-2xl animate-pulse">
                <div className="text-4xl font-black">#1</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Ranked</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 px-4 bg-indigo-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Why Trust Our <br />Expert Reviews?</h2>
            <div className="space-y-8">
              {[
                { icon: <ShieldCheck />, title: 'Unbiased Testing', desc: 'We buy all products we review. No freebies, no bias.' },
                { icon: <Zap />, title: 'Real-World Usage', desc: 'We test products in real scenarios for at least 30 days.' },
                { icon: <Star />, title: 'Expert Methodology', desc: 'Our team consists of industry veterans and tech enthusiasts.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-indigo-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20">
            <div className="text-center mb-8">
              <div className="text-5xl font-black mb-2">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <div className="text-indigo-100 text-sm font-medium">Average Reader Satisfaction</div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl italic text-indigo-50">
                "AffiliatePro is my go-to for tech reviews. Their comparison tables saved me hours of research and $200 on my last purchase!"
                <div className="mt-4 font-bold not-italic">— Michael S., Verified Reader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Latest from the Blog</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Buying guides, tech news, and tips to help you get the most out of your gear.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-bold flex items-center gap-2">
                  Read Article <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
