import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/utils/helpers';
import SearchModal from '@/src/components/SearchModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Best of 2026', path: '/best-of-2026' },
    { name: 'Categories', path: '/categories' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 px-6 py-4 w-[95%] max-w-7xl rounded-[2rem]',
          isScrolled 
            ? 'glass shadow-hover' 
            : 'bg-white/50 backdrop-blur-sm border border-white/20'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 transition-all duration-500 shadow-xl shadow-slate-200">
              <ShoppingBag size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Affiliate<span className="text-indigo-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all hover:text-indigo-600 relative group',
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 lg:p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all flex items-center gap-2 lg:gap-3 group"
            >
              <Search size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden xl:inline-block border border-slate-200 px-2 py-1 rounded-lg shadow-sm bg-white">⌘K</span>
            </button>
            <Link
              to="/categories"
              className="bg-slate-900 text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-2xl text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-200 active:scale-95 whitespace-nowrap"
            >
              All Categories
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Search size={24} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden glass mt-4 rounded-[2.5rem] overflow-hidden shadow-hover border border-slate-100"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-xl font-black uppercase tracking-widest p-4 rounded-2xl transition-all',
                      location.pathname === link.path ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-slate-600 hover:bg-slate-50'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/categories"
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-900 text-white text-center py-6 rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-slate-200"
                >
                  Browse Categories
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
