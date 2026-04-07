import React from 'react';
import { Search, MapPin, ArrowRight, CloudRain, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FarmerHome() {
  const navigate = useNavigate();
  
  const categories = [
    { icon: '🌱', label: 'Seeds', color: 'bg-green-100 text-green-700' },
    { icon: '🧪', label: 'Fertilizer', color: 'bg-blue-100 text-blue-700' },
    { icon: '🐛', label: 'Pesticide', color: 'bg-red-100 text-red-700' },
    { icon: '🚜', label: 'Tools', color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-primary-600 px-6 pt-10 pb-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="text-white">
            <p className="text-primary-100 text-sm">Location</p>
            <div className="flex items-center gap-1 font-semibold text-lg">
              <MapPin size={18} />
              Mumbai, CH
            </div>
          </div>
          <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition">
            <span className="text-white font-medium text-sm px-2">A/अ</span>
          </div>
        </div>
        
        {/* Search */}
        <div 
          onClick={() => navigate('/farmer/search')}
          className="bg-white rounded-xl py-3 px-4 flex items-center gap-3 text-gray-500 shadow-sm cursor-pointer"
        >
          <Search size={20} className="text-primary-500" />
          <span className="text-sm">Search for seeds, fertilizers...</span>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        
        {/* Weather Card */}
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-blue-900">Good time to sow!</p>
            <p className="text-sm text-blue-700 mt-1">Slight rain expected today.</p>
          </div>
          <CloudRain className="text-blue-500 w-10 h-10" />
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-4">Categories</h2>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div onClick={() => navigate('/farmer/search')} className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-3xl shadow-sm cursor-pointer active:scale-95 transition-transform`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-medium text-gray-700">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <div 
              onClick={() => navigate('/farmer/search')}
              className="card p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                <Search size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">Check Market Prices</h3>
                <p className="text-xs text-gray-500 mt-1">Compare prices from local shops.</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
            
            <div 
              onClick={() => navigate('/farmer/shops')}
              className="card p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">Find Nearby Shops</h3>
                <p className="text-xs text-gray-500 mt-1">Locate sellers in your area.</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
