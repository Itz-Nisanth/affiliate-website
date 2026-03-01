import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Contact Us | AffiliatePro</title>
        <meta name="description" content="Have a question or feedback? Get in touch with the AffiliatePro team. We're here to help you." />
      </Helmet>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
                Get in <span className="text-indigo-600">Touch</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Have questions about a product? Want to partner with us? Or just want to say hi? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, title: 'Email Us', detail: 'hello@affiliatepro.com' },
                  { icon: <MapPin />, title: 'Our Office', detail: '123 Review St, Tech City, TC 12345' },
                  { icon: <Phone />, title: 'Call Us', detail: '+1 (555) 000-0000' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
