import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ChevronRight, LayoutGrid, Star } from 'lucide-react';
import { PRODUCTS } from '@/src/data/mockData';
import ProductCard from '@/src/components/ProductCard';

export default function Category() {
  const { categoryName, subCategoryName } = useParams();
  
  const decodedCategory = categoryName ? decodeURIComponent(categoryName) : '';
  const decodedSubCategory = subCategoryName ? decodeURIComponent(subCategoryName) : '';
  
  // Get all unique sub-categories for this main category
  const subCategories = Array.from(new Set(
    PRODUCTS
      .filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase())
      .map(p => p.subCategory)
  ));

  const filteredProducts = PRODUCTS.filter((product) => {
    const catMatch = product.category.toLowerCase() === decodedCategory.toLowerCase();
    if (decodedSubCategory) {
      return catMatch && product.subCategory.toLowerCase() === decodedSubCategory.toLowerCase();
    }
    return catMatch;
  });

  const isViewingSubCategory = !!decodedSubCategory;

  return (
    <div className="pt-40 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{isViewingSubCategory ? `${decodedSubCategory} in ${decodedCategory}` : decodedCategory} | AffiliatePro</title>
        <meta name="description" content={`Expert reviews and the best deals on ${decodedSubCategory || decodedCategory} products.`} />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
        <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/categories" className="hover:text-brand-primary transition-colors">Categories</Link>
        <ChevronRight size={12} />
        {isViewingSubCategory ? (
          <>
            <Link to={`/category/${encodeURIComponent(decodedCategory)}`} className="hover:text-brand-primary transition-colors">{decodedCategory}</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900">{decodedSubCategory}</span>
          </>
        ) : (
          <span className="text-slate-900">{decodedCategory}</span>
        )}
      </div>

      {/* Hero */}
      <section className="py-24 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-soft border border-brand-primary/10">
            <Zap size={14} className="animate-pulse" />
            <span>Expert Curated Selection</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
            {isViewingSubCategory ? (
              <>Best <span className="text-brand-primary">{decodedSubCategory}</span></>
            ) : (
              <>Explore <span className="text-brand-primary">{decodedCategory}</span></>
            )}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {isViewingSubCategory 
              ? `We've tested the top-rated ${decodedSubCategory.toLowerCase()} products to help you find the perfect one.`
              : `Browse our expert-tested ${decodedCategory.toLowerCase()} sub-categories to find exactly what you're looking for.`
            }
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {!isViewingSubCategory && subCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {subCategories.map((sub) => (
                <Link key={sub} to={`/category/${encodeURIComponent(decodedCategory)}/${encodeURIComponent(sub)}`} className="group">
                  <motion.div
                    whileHover={{ y: -12 }}
                    className="bg-white p-12 rounded-[3rem] shadow-soft hover:shadow-hover transition-all duration-500 border border-slate-100 flex items-center justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary rounded-full -mr-12 -mt-12 group-hover:bg-brand-primary transition-colors duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{sub}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {PRODUCTS.filter(p => p.category === decodedCategory && p.subCategory === sub).length} Products Available
                      </p>
                    </div>
                    <div className="relative z-10 w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary transition-all shadow-sm">
                      <ArrowRight size={24} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : (
            <>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-soft">
                  <LayoutGrid size={64} className="mx-auto mb-8 text-slate-100" />
                  <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">No products found</h2>
                  <p className="text-slate-500 mb-12 font-medium">We're currently testing more products in this category. Check back soon!</p>
                  <Link to="/categories" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl shadow-slate-200">
                    Back to Categories
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] -ml-48 -mb-48" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-primary/20">
              <Star size={14} className="fill-brand-primary" />
              <span>Join the Inner Circle</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Get the <br />
              <span className="text-brand-primary">Best Deals</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
              Join our newsletter to receive exclusive discounts and expert buying guides for {decodedSubCategory || decodedCategory} gear.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all font-medium"
              />
              <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-secondary transition-all shrink-0 active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
