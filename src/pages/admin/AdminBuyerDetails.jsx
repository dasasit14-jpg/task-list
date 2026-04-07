import React, { useState } from 'react';
import { Search, MapPin, MoreVertical } from 'lucide-react';
import { buyers } from '../../data/dummyData'; // Reusing dummy data

export default function AdminBuyerDetails() {
  const [search, setSearch] = useState('');

  const filteredBuyers = buyers.filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.village.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900">All Registered Buyers</h2>
        <div className="relative w-full sm:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search farmers/buyers..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-medium">Farmer / Buyer</th>
                <th className="p-4 font-medium">Region</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Platform Activity</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBuyers.map((buyer) => (
                <tr key={buyer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">{buyer.name.charAt(0)}</div>
                      <span className="font-medium text-gray-900">{buyer.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      {buyer.village}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-900">{buyer.phone}</td>
                  <td className="p-4">
                     <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded">Active</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                       <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredBuyers.length === 0 && (
                <tr>
                   <td colSpan="5" className="p-8 text-center text-gray-500">No buyers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
