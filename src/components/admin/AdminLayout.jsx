import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Shield, LayoutDashboard, Users, CheckSquare, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, path: '/admin/dashboard', label: 'Dashboard' },
    { icon: Users, path: '/admin/users', label: 'Seller Management' },
    { icon: Users, path: '/admin/buyers', label: 'Buyer Details' },
    { icon: CheckSquare, path: '/admin/approvals', label: 'Approvals' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-indigo-800">
          <Shield className="text-indigo-400 mr-2" size={24} />
          <span className="font-bold text-xl text-white">Admin Panel</span>
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
                    ? 'bg-indigo-800 text-white shadow-inner' 
                    : 'text-indigo-200 hover:bg-indigo-800/50'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-indigo-300' : 'text-indigo-400/70'} />
                {item.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-indigo-800">
          <button 
            onClick={() => navigate('/farmer/auth')} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-pink-400 hover:bg-indigo-800 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="font-semibold text-gray-800 text-lg">
            {navItems.find(i => location.pathname.includes(i.path))?.label || 'Admin Panel'}
          </h2>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">A</div>
             <span className="text-sm font-medium text-gray-700">Super Admin</span>
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
