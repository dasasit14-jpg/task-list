import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import { products as initialProducts } from '../../data/dummyData';

export default function ProductsManager() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="space-y-6">
      
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full sm:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{product.type}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                       <span className="font-semibold text-gray-900">₹{product.price}</span>
                       <button className="text-blue-500 hover:underline text-xs" title="Quick edit">Edit</button>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{product.stock} units</td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors ml-1">
                      <Trash2 size={18} />
                    </button>
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
