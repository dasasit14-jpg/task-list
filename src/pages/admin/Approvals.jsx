import React from 'react';
import { Check, X } from 'lucide-react';

export default function Approvals() {
  // Dummy pending products
  const pending = [
    { id: 101, name: 'Imported Apple Seeds', seller: 'Ramesh Singh', price: 800, date: 'Today' },
    { id: 102, name: 'Special Growth Formula', seller: 'Suresh Kumar', price: 1200, date: 'Yesterday' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Pending Product Approvals</h2>
        
        <div className="space-y-4">
          {pending.length === 0 ? (
            <p className="text-gray-500">No pending products.</p>
          ) : (
            pending.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    IMG
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Seller: <span className="font-medium text-gray-700">{item.seller}</span></p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-gray-900 mb-2">₹{item.price}</div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors">
                      <X size={14} /> Reject
                    </button>
                    <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 text-green-600 bg-green-50 hover:bg-green-100 rounded transition-colors">
                      <Check size={14} /> Approve
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
