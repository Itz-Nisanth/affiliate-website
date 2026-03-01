import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Product } from '@/src/data/mockData';
import { formatCurrency, cn, cloakLink } from '@/src/utils/helpers';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "bg-white rounded-[2rem] overflow-hidden border border-slate-100 transition-all duration-500 group",
        featured ? "shadow-hover ring-2 ring-indigo-500/10" : "shadow-soft hover:shadow-hover"
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestOverall && (
            <div className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md">
              Best Overall
            </div>
          )}
          {product.isBestBudget && (
            <div className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-md">
              Best Value
            </div>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 glass text-slate-900 px-3 py-1.5 rounded-xl text-sm font-black shadow-xl">
          {formatCurrency(product.price)}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <Link 
            to={`/reviews/${product.slug}`}
            className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-black text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
          >
            Read Full Review
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
                )}
              />
            ))}
            <span className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">
              {product.reviewCount.toLocaleString()} Reviews
            </span>
          </div>
          <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded-md">
            {product.subCategory}
          </div>
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
          <Link to={`/reviews/${product.slug}`}>{product.title}</Link>
        </h3>

        <p className="text-sm text-slate-500 mb-8 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={cloakLink(product.amazonUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-900 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-95 shadow-xl shadow-slate-200"
          >
            Buy on Amazon
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
