import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === '/';

  return (
    <nav className={`navbar ${isLanding ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <Building2 size={28} strokeWidth={2.5} />
          <span>Horizon Bank, a bank of Super Monopoly Bank</span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#promotions" onClick={() => setMenuOpen(false)}>Promotions</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
