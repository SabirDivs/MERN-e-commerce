import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}