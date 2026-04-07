import React from 'react';
import { Package, TrendingUp, Users, Eye } from 'lucide-react';
import { products } from '../../data/dummyData';

export default function SellerDashboard() {
  const stats = [
    { title: 'Total Products', value: '24', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Active Listings', value: '18', icon: Eye, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Profile Views', value: '1,240', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Price Updates', value: '12', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="card p-6 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Updates */}
      <div className="card">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Your Top Products</h3>
          <button className="text-sm font-medium text-blue-600 hover:underline">View All</button>
        </div>
        <div className="divide-y divide-gray-50">
          {products.slice(0, 3).map(product => (
            <div key={product.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                <div>
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">₹{product.price}</p>
                <p className="text-sm text-green-600">In Stock: {product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
