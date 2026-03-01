import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/src/data/mockData';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Expert Buying Guides & Tech News | AffiliatePro Blog</title>
        <meta name="description" content="Stay updated with the latest tech news, in-depth buying guides, and expert tips to help you make smarter purchasing decisions." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            The <span className="text-indigo-600">AffiliatePro</span> Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert insights, buying guides, and the latest tech trends to help you navigate the world of consumer electronics.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
