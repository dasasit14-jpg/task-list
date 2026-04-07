import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, MapPin, Bell } from 'lucide-react';

export default function FarmerLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, path: '/farmer/home', label: 'Home' },
    { icon: Search, path: '/farmer/search', label: 'Search' },
    { icon: MapPin, path: '/farmer/shops', label: 'Shops' },
    { icon: Bell, path: '/farmer/notifications', label: 'Alerts' },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center py-4 sm:py-8 lg:py-12">
      {/* Mobile Simulation Wrapper */}
      <div className="relative w-full h-full sm:h-[800px] sm:w-[375px] bg-gray-50 sm:rounded-[2rem] sm:shadow-2xl overflow-hidden flex flex-col border-[8px] border-gray-900 border-opacity-90 z-0">
        
        {/* Main Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
          <Outlet />
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={24} className={isActive ? 'stroke-[2.5]' : 'stroke-2'} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
