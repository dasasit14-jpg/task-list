import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FarmerLayout from './components/farmer/FarmerLayout';
import SellerLayout from './components/seller/SellerLayout';
import AdminLayout from './components/admin/AdminLayout';

// Farmer Pages
import FarmerHome from './pages/farmer/FarmerHome';
import SearchProducts from './pages/farmer/SearchProducts';
import NearbyShops from './pages/farmer/NearbyShops';
import Notifications from './pages/farmer/Notifications';
import FarmerAuth from './pages/farmer/FarmerAuth';

// Seller Pages
import SellerAuth from './pages/seller/SellerAuth';
import SellerDashboard from './pages/seller/SellerDashboard';
import ProductsManager from './pages/seller/ProductsManager';
import BuyerDetails from './pages/seller/BuyerDetails';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManager from './pages/admin/UserManager';
import Approvals from './pages/admin/Approvals';
import AdminBuyerDetails from './pages/admin/AdminBuyerDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to farmer auth for demonstration */}
        <Route path="/" element={<Navigate to="/farmer/auth" replace />} />
        
        {/* Farmer Routes (Mobile Viewports) */}
        <Route path="/farmer/auth" element={<FarmerAuth />} />
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route path="home" element={<FarmerHome />} />
          <Route path="search" element={<SearchProducts />} />
          <Route path="shops" element={<NearbyShops />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Seller Routes (Desktop Viewports) */}
        <Route path="/seller/auth" element={<SellerAuth />} />
        <Route path="/seller" element={<SellerLayout />}>
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<ProductsManager />} />
          <Route path="buyers" element={<BuyerDetails />} />
        </Route>

        {/* Admin Routes (Desktop Viewports) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserManager />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="buyers" element={<AdminBuyerDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
