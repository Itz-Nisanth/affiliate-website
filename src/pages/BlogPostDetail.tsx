import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from '@/src/data/mockData';

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 px-4 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Article Not Found</h1>
        <Link to="/blog" className="text-brand-primary font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <Helmet>
        <title>{post.title} | AffiliatePro Tech Insights</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Article Header */}
      <header className="py-24 px-4 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-accent font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-t border-brand-primary/10">
            <div className="flex items-center gap-4">
              <img src={`https://picsum.photos/seed/${post.author}/100/100`} className="w-12 h-12 rounded-full border-2 border-brand-accent/20" alt={post.author} />
              <div>
                <div className="text-brand-primary font-bold">{post.author}</div>
                <div className="text-slate-500 text-sm">Editorial Team</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-2 text-slate-400 hover:text-brand-accent transition-colors"><Share2 size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-brand-accent transition-colors"><Bookmark size={20} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
            <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} referrerPolicy="no-referrer" />
          </div>
          
          <div className="markdown-body prose prose-lg prose-slate max-w-none 
              prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-li:text-slate-600">
            <Markdown>{post.content}</Markdown>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Tags:</span>
            {['Technology', 'Reviews', 'Buying Guide', post.category].map(tag => (
              <span key={tag} className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-brand-secondary hover:text-brand-primary transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-24 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={related.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={related.title} referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-3">{related.category}</div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{related.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Mini */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-brand-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <MessageCircle size={48} className="mx-auto mb-8 opacity-50 text-brand-accent" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">Never Miss an Update</h2>
            <p className="text-brand-secondary/80 text-lg mb-10 max-w-xl mx-auto">
              Get our latest reviews and tech guides delivered straight to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-brand-secondary/60 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
              />
              <button className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-brand-primary transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
