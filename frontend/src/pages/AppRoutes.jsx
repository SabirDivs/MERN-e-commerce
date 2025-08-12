import { Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import ProductList from './public/ProductList';
import Checkout from './public/Checkout';
import Dashboard from './admin/Dashboard';
import ProductManagement from './admin/ProductManagement';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<ProductManagement />} />
    </Routes>
  );
}