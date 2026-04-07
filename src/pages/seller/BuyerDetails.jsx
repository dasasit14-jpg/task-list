import React, { useState } from 'react';
import { Search, MapPin, PhoneCall } from 'lucide-react';
import { buyers } from '../../data/dummyData'; // Will create this dummy data

export default function BuyerDetails() {
  const [search, setSearch] = useState('');

  // Simple filter
  const filteredBuyers = buyers.filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.village.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full sm:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search buyers by name or village..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-medium">Buyer Name</th>
                <th className="p-4 font-medium">Village / Location</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Last Purchase</th>
                <th className="p-4 font-medium text-right">Total Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBuyers.map((buyer) => (
                <tr key={buyer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{buyer.name}</td>
                  <td className="p-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      {buyer.village}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-blue-600">
                    <button className="flex items-center gap-1 hover:underline">
                       <PhoneCall size={14} /> {buyer.phone}
                    </button>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{buyer.lastPurchase}</td>
                  <td className="p-4 text-sm font-semibold text-gray-900 text-right">₹{buyer.totalSpent}</td>
                </tr>
              ))}
              {filteredBuyers.length === 0 && (
                <tr>
                   <td colSpan="5" className="p-8 text-center text-gray-500">No buyers found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
