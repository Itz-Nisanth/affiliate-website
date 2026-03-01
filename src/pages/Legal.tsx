import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

const LegalLayout = ({ title, content }: LegalPageProps) => (
  <div className="pt-20 bg-slate-50 min-h-screen">
    <Helmet>
      <title>{title} | AffiliatePro</title>
    </Helmet>
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-100">
        <h1 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600">
          {content}
        </div>
      </div>
    </section>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    content={
      <>
        <p>Last updated: February 26, 2026</p>
        <h2>1. Introduction</h2>
        <p>Welcome to AffiliatePro. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
        <h2>2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
        <h2>3. Cookies</h2>
        <p>We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
      </>
    }
  />
);

export const TermsConditions = () => (
  <LegalLayout
    title="Terms & Conditions"
    content={
      <>
        <p>Last updated: February 26, 2026</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on AffiliatePro's website for personal, non-commercial transitory viewing only.</p>
      </>
    }
  />
);

export const AffiliateDisclosure = () => (
  <LegalLayout
    title="Affiliate Disclosure"
    content={
      <>
        <p>Last updated: February 26, 2026</p>
        <p>AffiliatePro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to, the Amazon Associates Program.</p>
        <p>Our reviews are based on our own honest opinions and experiences. We do not receive free products in exchange for positive reviews.</p>
      </>
    }
  />
);
