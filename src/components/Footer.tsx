import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-slate-300 pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-accent/20"
            >
              <span className="font-bold">A</span>
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
              Affiliate<span className="text-brand-accent">Pro</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-8 font-medium text-brand-secondary/60">
            Helping you make smarter buying decisions with expert reviews, in-depth comparisons, and the latest deals on top products.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Facebook size={20} />, label: 'Facebook' },
              { icon: <Twitter size={20} />, label: 'Twitter' },
              { icon: <Instagram size={20} />, label: 'Instagram' },
              { icon: <Youtube size={20} />, label: 'Youtube' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ y: -3, color: '#D97706' }}
                className="text-brand-secondary/40 hover:text-brand-accent transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
            <li><Link to="/best-of-2026" className="hover:text-brand-accent transition-colors">Best of 2026</Link></li>
            <li><Link to="/categories" className="hover:text-brand-accent transition-colors">All Categories</Link></li>
            <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Blog</Link></li>
            <li><Link to="/sitemap" className="hover:text-brand-accent transition-colors">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclosure" className="hover:text-brand-accent transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Get the best deals and reviews delivered to your inbox.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-white placeholder:text-slate-400"
            />
            <button className="absolute right-2 top-2 bg-brand-accent text-brand-primary p-1.5 rounded-lg hover:bg-white transition-colors">
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
