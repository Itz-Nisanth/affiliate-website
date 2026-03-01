import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <span className="font-bold">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Affiliate<span className="text-indigo-500">Pro</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Helping you make smarter buying decisions with expert reviews, in-depth comparisons, and the latest deals on top products.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
            <li><Link to="/best-of-2026" className="hover:text-indigo-400 transition-colors">Best of 2026</Link></li>
            <li><Link to="/categories" className="hover:text-indigo-400 transition-colors">All Categories</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
            <li><Link to="/sitemap" className="hover:text-indigo-400 transition-colors">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclosure" className="hover:text-indigo-400 transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Get the best deals and reviews delivered to your inbox.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button className="absolute right-2 top-2 bg-indigo-600 text-white p-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
              <Mail size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-500 mb-4">
          AffiliatePro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} AffiliatePro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
