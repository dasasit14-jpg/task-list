import React from 'react';
import { ArrowLeft, MapPin, Phone, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { shops } from '../../data/dummyData';

export default function NearbyShops() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-full flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-10 pb-4 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-gray-900 text-lg">Nearby Shops</h1>
      </div>

      {/* Map Placeholder */}
      <div className="h-48 bg-blue-100 relative w-full mb-4 relative flex items-center justify-center">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
         <div className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-600 flex items-center gap-2 z-10">
            <MapPin size={16} /> Map View (Simulation)
         </div>
         {/* Fake Pins */}
         <div className="absolute top-1/4 left-1/4 text-red-500 bg-white rounded-full p-1 shadow-sm"><MapPin size={20} className="fill-current" /></div>
         <div className="absolute top-1/2 right-1/3 text-red-500 bg-white rounded-full p-1 shadow-sm"><MapPin size={20} className="fill-current" /></div>
      </div>

      {/* Shop List */}
      <div className="px-6 pb-6 space-y-4 flex-1">
        {shops.map((shop) => (
          <div key={shop.id} className="card p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-900 text-base">{shop.name}</h3>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                   {shop.address}
                </p>
              </div>
              <div className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                 ★ {shop.rating}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-primary-600 flex items-center gap-1">
                 <MapPin size={14} /> {shop.distance}
              </span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center active:scale-95 transition-transform">
                  <Phone size={18} />
                </button>
                <button className="h-10 px-4 rounded-full bg-primary-600 text-white flex items-center gap-2 font-medium text-sm active:scale-95 transition-transform shadow-sm">
                  <Navigation size={16} /> Dir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
