import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Building2 size={24} />
              <span>Horizon Bank</span>
            </div>
            <p>Banking reimagined for the modern world. Secure, simple, and built for you.</p>
            <div className="footer-contact">
              <div><Mail size={16} /> support@horizonbank.com</div>
              <div><Phone size={16} /> 1-800-HORIZON</div>
              <div><MapPin size={16} /> New York, NY 10001</div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Checking Accounts</a></li>
              <li><a href="#">Savings Accounts</a></li>
              <li><a href="#">Credit Cards</a></li>
              <li><a href="#">Personal Loans</a></li>
              <li><a href="#">Mortgages</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">FDIC Insurance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Horizon Bank. All rights reserved. Member FDIC.</p>
          <p>Equal Housing Lender. NMLS #123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
