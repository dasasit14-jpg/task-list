export const products = [
  { id: 1, name: 'Premium Wheat Seeds', category: 'seeds', type: 'Seeds', price: 450, shop: 'Kisan Kendra', distance: '1.2 km', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400', stock: 50 },
  { id: 2, name: 'Urea Fertilizer 50kg', category: 'fertilizers', type: 'Fertilizer', price: 266, shop: 'AgriCare Solutions', distance: '2.5 km', image: 'https://images.unsplash.com/photo-1628543105342-9a84a6c82705?auto=format&fit=crop&q=80&w=400', stock: 120 },
  { id: 3, name: 'Organic Pesticide Neo', category: 'pesticides', type: 'Pesticide', price: 320, shop: 'Green Farm Store', distance: '3.0 km', image: 'https://images.unsplash.com/photo-1586940842600-e925b3fa394a?auto=format&fit=crop&q=80&w=400', stock: 30 },
  { id: 4, name: 'Hybrid Tomato Seeds', category: 'seeds', type: 'Seeds', price: 150, shop: 'Kisan Kendra', distance: '1.2 km', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=400', stock: 200 },
];

export const shops = [
  { id: 1, name: 'Kisan Kendra', distance: '1.2 km', phone: '+91 9876543210', address: 'Main Market, Sector 4', rating: 4.8 },
  { id: 2, name: 'AgriCare Solutions', distance: '2.5 km', phone: '+91 9876543211', address: 'Highway Road, Block B', rating: 4.5 },
  { id: 3, name: 'Green Farm Store', distance: '3.0 km', phone: '+91 9876543212', address: 'Village Square', rating: 4.2 },
];

export const notifications = [
  { id: 1, title: 'Price Drop Alert', message: 'Urea price dropped by ₹10 at Kisan Kendra.', date: 'Today, 09:00 AM', unread: true },
  { id: 2, title: 'Weather Update', message: 'Heavy rain expected tomorrow. Protect open yields.', date: 'Yesterday, 06:30 PM', unread: false },
  { id: 3, title: 'Subsidy News', message: 'New govt subsidy announced for seed purchases.', date: 'Mon, 10:00 AM', unread: false },
];

export const sellers = [
  { id: 1, name: 'Ramesh Singh', shopName: 'Kisan Kendra', status: 'Active', joinedDate: 'Jan 10, 2023' },
  { id: 2, name: 'Suresh Kumar', shopName: 'AgriCare Solutions', status: 'Active', joinedDate: 'Feb 22, 2023' },
  { id: 3, name: 'Amit Patel', shopName: 'Green Farm Store', status: 'Pending', joinedDate: 'April 05, 2023' },
];

export const buyers = [
  { id: 201, name: 'Vijay Patil', village: 'Rampur', phone: '+91 9123456780', lastPurchase: '2 days ago', totalSpent: 4500 },
  { id: 202, name: 'Lakshman Rao', village: 'Shantipur', phone: '+91 9123456781', lastPurchase: '1 week ago', totalSpent: 12000 },
  { id: 203, name: 'Krishna Yadav', village: 'Rampur', phone: '+91 9123456782', lastPurchase: '3 weeks ago', totalSpent: 8300 },
  { id: 204, name: 'Harish Chandra', village: 'Kishanpur', phone: '+91 9123456783', lastPurchase: '1 month ago', totalSpent: 2100 }
];
