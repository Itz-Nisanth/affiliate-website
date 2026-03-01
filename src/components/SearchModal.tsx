import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, ShoppingBag, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS, Product, BlogPost } from '@/src/data/mockData';
import { formatCurrency, cn } from '@/src/utils/helpers';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ products: Product[]; posts: BlogPost[] }>({
    products: [],
    posts: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filteredProducts = PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subCategory.toLowerCase().includes(query.toLowerCase())
      );
      const filteredPosts = BLOG_POSTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults({ products: filteredProducts, posts: filteredPosts });
    } else {
      setResults({ products: [], posts: [] });
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl glass rounded-[3rem] shadow-hover overflow-hidden border border-white/40"
          >
            <div className="p-8 border-b border-slate-100 flex items-center gap-6">
              <Search className="text-slate-400" size={32} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, reviews, guides..."
                className="flex-grow bg-transparent text-2xl font-black text-slate-900 focus:outline-none placeholder:text-slate-300 uppercase tracking-tighter"
              />
              <button
                onClick={onClose}
                className="p-3 hover:bg-slate-100 rounded-2xl transition-all text-slate-400"
              >
                <X size={32} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-10">
              {query.trim().length < 2 ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-300 animate-float">
                    <Search size={48} />
                  </div>
                  <p className="text-slate-400 font-black uppercase tracking-widest text-sm">Type at least 2 characters to search...</p>
                </div>
              ) : results.products.length === 0 && results.posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="space-y-12">
                  {results.products.length > 0 && (
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 flex items-center gap-3">
                        <ShoppingBag size={14} />
                        Products ({results.products.length})
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {results.products.map((product) => (
                          <Link
                            key={product.id}
                            to={`/reviews/${product.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-6 p-4 rounded-3xl hover:bg-white hover:shadow-hover transition-all group border border-transparent hover:border-slate-100"
                          >
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-soft">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="text-lg font-black text-slate-900 truncate group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
                                {product.title}
                              </h4>
                              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                                <span className="text-indigo-600">{formatCurrency(product.price)}</span>
                                <span>•</span>
                                <span>{product.category}</span>
                                <span>•</span>
                                <span>{product.subCategory}</span>
                              </div>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <ArrowRight size={20} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.posts.length > 0 && (
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6 flex items-center gap-3">
                        <FileText size={14} />
                        Articles ({results.posts.length})
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {results.posts.map((post) => (
                          <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-6 p-4 rounded-3xl hover:bg-white hover:shadow-hover transition-all group border border-transparent hover:border-slate-100"
                          >
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-soft">
                              <FileText size={32} />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="text-lg font-black text-slate-900 truncate group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                                {post.title}
                              </h4>
                              <p className="text-xs text-slate-400 truncate mt-1 font-medium">{post.excerpt}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                              <ArrowRight size={20} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-6 bg-slate-900 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                Press <kbd className="bg-slate-800 px-2 py-1 rounded-lg text-slate-300 border border-slate-700 shadow-sm mx-2">ESC</kbd> to close
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
