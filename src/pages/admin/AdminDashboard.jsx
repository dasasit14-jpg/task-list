import React from 'react';
import { Users, Store, Package, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Farmers', value: '45.2k', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Registered Sellers', value: '1,280', change: '+5%', icon: Store, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Active Products', value: '14.5k', change: '+22%', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Transactions Today', value: '3,450', change: '+8%', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts / Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-gray-900 mb-4">Platform Activity</h3>
           <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
              <span className="text-gray-400 font-medium">Activity Chart Visualization</span>
           </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-gray-900 mb-4">Price Anomaly Detection</h3>
           <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-200 text-red-700 flex items-center justify-center font-bold">!</div>
                      <div>
                        <p className="text-sm font-bold text-red-900">Urea Fertilizer Spike</p>
                        <p className="text-xs text-red-700">Price increased by 40% at Green Farm Store</p>
                      </div>
                   </div>
                   <button className="text-xs font-semibold bg-white border border-red-200 text-red-700 px-3 py-1 rounded shadow-sm hover:bg-gray-50">Investigate</button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
