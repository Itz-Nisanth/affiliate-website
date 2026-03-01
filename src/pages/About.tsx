import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>About Us | AffiliatePro</title>
        <meta name="description" content="Learn more about AffiliatePro, our mission, and our expert team dedicated to providing unbiased product reviews." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Our Mission is <br />
            <span className="text-indigo-600">Transparency.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            AffiliatePro was founded in 2024 with a simple goal: to provide the most honest, in-depth, and unbiased product reviews on the internet. We believe that consumers deserve to know exactly what they're buying before they click "Add to Cart."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: 'Unbiased Reviews', desc: 'We never accept payment for positive reviews. Our loyalty is to our readers.' },
              { icon: <Target />, title: 'In-Depth Testing', desc: 'Every product is tested for at least 30 days in real-world conditions.' },
              { icon: <Users />, title: 'Expert Team', desc: 'Our reviewers are industry experts with years of experience in their fields.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Meet the Experts</h2>
            <p className="text-slate-400">The people behind the reviews.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <img src={`https://picsum.photos/seed/team${i}/400/400`} className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/10" alt="Team Member" />
                <h4 className="text-xl font-bold mb-1">Expert Reviewer {i}</h4>
                <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Tech Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
