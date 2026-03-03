import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Laptop, Home as HomeIcon, HeartPulse, Gamepad2, Utensils, Smartphone, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MAIN_CATEGORIES = [
  { name: 'Electronics', icon: <Laptop size={32} />, desc: 'Laptops, Headphones, Drones & more' },
  { name: 'Home Appliances', icon: <HomeIcon size={32} />, desc: 'TVs, Fridges, Washing Machines' },
  { name: 'Kitchen', icon: <Utensils size={32} />, desc: 'Air Fryers, Instant Pots, Blenders' },
  { name: 'Cooking', icon: <Utensils size={32} />, desc: 'Knives, Trays, Pans & Cookware' },
  { name: 'Health', icon: <HeartPulse size={32} />, desc: 'Fitness Trackers, Scales, Wellness' },
  { name: 'Gaming', icon: <Gamepad2 size={32} />, desc: 'Mice, Keyboards, Consoles' },
];

export default function Categories() {
  return (
    <div className="pt-40 pb-32 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Shop by Category | Premium Tech & Lifestyle Guides 2026</title>
        <meta name="description" content="Explore our wide range of tech and lifestyle categories. From high-end electronics to home appliances, find the best products with expert reviews." />
        <meta name="keywords" content="tech categories, electronics categories, home appliances, kitchen gadgets, gaming gear" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-soft border border-brand-primary/10">
            <ShoppingBag size={14} />
            <span>Expert Curated Collections</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
            Browse by <span className="text-brand-primary">Category</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Find the best products for your needs across our wide range of expert-tested categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MAIN_CATEGORIES.map((cat, i) => (
            <Link key={cat.name} to={`/category/${encodeURIComponent(cat.name)}`} className="group">
              <motion.div
                whileHover={{ y: -12 }}
                className="bg-white p-12 rounded-[3rem] shadow-soft hover:shadow-hover transition-all duration-500 border border-slate-100 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary rounded-full -mr-16 -mt-16 group-hover:bg-brand-primary transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-slate-50 text-brand-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white transition-colors shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{cat.name}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed font-medium">{cat.desc}</p>
                  <div className="flex items-center gap-3 text-brand-primary font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                    Explore Sub-categories <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
