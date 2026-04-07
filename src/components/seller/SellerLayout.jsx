import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PackageSearch, Tag, LogOut, Store, Users } from 'lucide-react';

export default function SellerLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, path: '/seller/dashboard', label: 'Dashboard' },
    { icon: PackageSearch, path: '/seller/products', label: 'Products' },
    { icon: Users, path: '/seller/buyers', label: 'Buyers' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Store className="text-primary-600 mr-2" size={24} />
          <span className="font-bold text-xl text-gray-900">Seller Panel</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                  isActive 
                    ? 'bg-primary-50 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-primary-600' : 'text-gray-400'} />
                {item.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => navigate('/farmer/auth')} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="font-semibold text-gray-800 text-lg">
            {navItems.find(i => location.pathname.includes(i.path))?.label || 'Seller Panel'}
          </h2>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">R</div>
             <span className="text-sm font-medium text-gray-700">Ramesh Singh</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
