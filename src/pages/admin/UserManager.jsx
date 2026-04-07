import React, { useState } from 'react';
import { Search, Ban, CheckCircle } from 'lucide-react';
import { sellers } from '../../data/dummyData';

export default function UserManager() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full sm:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-2">
           {['All', 'Active', 'Pending'].map(f => (
             <button 
               key={f}
               onClick={() => setFilter(f)}
               className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === f ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
             >
               {f}
             </button>
           ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-medium">Seller Name</th>
                <th className="p-4 font-medium">Shop Details</th>
                <th className="p-4 font-medium">Joined Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {sellers.filter(s => filter === 'All' || s.status === filter).map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span className="font-medium text-gray-900">{seller.name}</span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{seller.shopName}</td>
                  <td className="p-4 text-sm text-gray-600">{seller.joinedDate}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      seller.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {seller.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {seller.status === 'Pending' ? (
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors" title="Approve">
                        <CheckCircle size={18} />
                      </button>
                    ) : (
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors" title="Block">
                        <Ban size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
