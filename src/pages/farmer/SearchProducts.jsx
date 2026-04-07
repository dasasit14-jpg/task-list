import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/dummyData';

export default function SearchProducts() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.type === filter);

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white px-6 pt-10 pb-4 shadow-sm sticky top-0 z-10 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-gray-100 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
            autoFocus
          />
        </div>
        <button className="p-2 text-gray-600 bg-gray-100 rounded-lg">
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar">
        {['All', 'Seeds', 'Fertilizer', 'Pesticide'].map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/30' : 'bg-white border border-gray-200 text-gray-600'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="px-6 pb-6 space-y-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card p-4 flex gap-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-20 h-20 rounded-lg object-cover bg-gray-100"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={12} /> {product.shop} • {product.distance}
                </p>
              </div>
              <div className="flex justify-between items-end mt-2">
                <div>
                  <span className="text-xs text-gray-500 block mb-0.5">Best Price</span>
                  <span className="text-lg font-bold text-primary-600">₹{product.price}</span>
                </div>
                <button className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-primary-100 active:scale-95 transition-all">
                  Compare
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
