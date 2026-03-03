import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import CustomCursor from '@/src/components/CustomCursor';
import Home from '@/src/pages/Home';
import ProductReview from '@/src/pages/ProductReview';
import Blog from '@/src/pages/Blog';
import Contact from '@/src/pages/Contact';
import About from '@/src/pages/About';
import Sitemap from '@/src/pages/Sitemap';
import Categories from '@/src/pages/Categories';
import Category from '@/src/pages/Category';
import Top10Article from '@/src/pages/Top10Article';
import BlogPostDetail from '@/src/pages/BlogPostDetail';
import { PrivacyPolicy, TermsConditions, AffiliateDisclosure } from '@/src/pages/Legal';
import { motion, AnimatePresence } from 'motion/react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-slate-900 selection:bg-brand-secondary selection:text-brand-primary">
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/best-of-2026" element={<PageWrapper><Top10Article /></PageWrapper>} />
                <Route path="/categories" element={<PageWrapper><Categories /></PageWrapper>} />
                <Route path="/category/:categoryName" element={<PageWrapper><Category /></PageWrapper>} />
                <Route path="/category/:categoryName/:subCategoryName" element={<PageWrapper><Category /></PageWrapper>} />
                <Route path="/reviews/:slug" element={<PageWrapper><ProductReview /></PageWrapper>} />
                <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
                <Route path="/blog/:slug" element={<PageWrapper><BlogPostDetail /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/sitemap" element={<PageWrapper><Sitemap /></PageWrapper>} />
                <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/terms" element={<PageWrapper><TermsConditions /></PageWrapper>} />
                <Route path="/disclosure" element={<PageWrapper><AffiliateDisclosure /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
