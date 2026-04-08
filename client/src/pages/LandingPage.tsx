import {
  Shield, Zap, PiggyBank, CreditCard, TrendingUp, Smartphone,
  ArrowRight, Star, CheckCircle2, Gift, Percent, Clock, Users,
  ChevronRight, Sparkles, BadgeDollarSign, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-in-up">
            <span className="section-tag">
              <Sparkles size={14} /> #1 Digital Bank 2026
            </span>
            <h1>
              Banking That <br />
              <span className="text-gradient">Works for You</span>
            </h1>
            <p className="hero-subtitle">
              Experience next-generation banking with zero fees, instant transfers,
              and smart savings tools. Your money deserves better — and so do you.
            </p>
            <div className="hero-cta">
              <Link to="/login" className="btn btn-primary btn-lg">
                Get Started Free <ArrowRight size={18} />
              </Link>
              <a href="#features" className="btn btn-secondary btn-lg">
                Learn More
              </a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-avatars">
                <div className="avatar" style={{ background: '#38BDF8' }}>JD</div>
                <div className="avatar" style={{ background: '#22C55E' }}>SK</div>
                <div className="avatar" style={{ background: '#F59E0B' }}>MR</div>
                <div className="avatar" style={{ background: '#A78BFA' }}>AL</div>
              </div>
              <div>
                <div className="hero-trust-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span>Trusted by 2M+ customers</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-in-up-delay-1">
            <div className="hero-card-stack">
              {/* Main card */}
              <div className="hero-bank-card animate-float">
                <div className="card-chip">
                  <div className="chip-lines">
                    <span /><span /><span /><span />
                  </div>
                </div>
                <div className="card-logo">HORIZON</div>
                <div className="card-number">•••• •••• •••• 4829</div>
                <div className="card-details">
                  <div>
                    <small>Card Holder</small>
                    <span>JOHN DOE</span>
                  </div>
                  <div>
                    <small>Expires</small>
                    <span>12/28</span>
                  </div>
                </div>
                <div className="card-contactless">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 18C12.4183 18 16 14.4183 16 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 15C8.31371 15 11 12.3137 11 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 12C4.20914 12 6 10.2091 6 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Floating balance widget */}
              <div className="hero-balance-widget">
                <div className="balance-label">Total Balance</div>
                <div className="balance-amount">$24,563.00</div>
                <div className="balance-change">
                  <TrendingUp size={14} />
                  <span>+12.5% this month</span>
                </div>
              </div>

              {/* Floating transaction widget */}
              <div className="hero-transaction-widget">
                <div className="transaction-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>
                  <ArrowRight size={16} style={{ transform: 'rotate(-45deg)' }} />
                </div>
                <div>
                  <div className="transaction-title">Payment Received</div>
                  <div className="transaction-sub">Freelance Project</div>
                </div>
                <div className="transaction-amount positive">+$3,200</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats container animate-fade-in-up-delay-2">
          <div className="stat-item">
            <div className="stat-number">$12B+</div>
            <div className="stat-label">Assets Managed</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">2M+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime SLA</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><Zap size={14} /> Features</span>
            <h2>Everything You Need <br />in One Place</h2>
            <p>Powerful tools designed to give you full control over your finances.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-large">
              <div className="feature-icon-wrap gradient-blue">
                <Shield size={28} />
              </div>
              <h3>Bank-Grade Security</h3>
              <p>256-bit encryption, biometric authentication, and real-time fraud monitoring keep your money safe 24/7.</p>
              <div className="feature-visual security-visual">
                <div className="security-ring ring-1"><Lock size={20} /></div>
                <div className="security-ring ring-2" />
                <div className="security-ring ring-3" />
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap gradient-green">
                <Zap size={24} />
              </div>
              <h3>Instant Transfers</h3>
              <p>Send money to anyone, anywhere in the world in seconds — not days.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap gradient-purple">
                <PiggyBank size={24} />
              </div>
              <h3>Smart Savings</h3>
              <p>AI-powered savings goals that automatically set aside money based on your spending habits.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap gradient-amber">
                <CreditCard size={24} />
              </div>
              <h3>Virtual Cards</h3>
              <p>Create unlimited virtual cards for online shopping with custom spending limits.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap gradient-rose">
                <TrendingUp size={24} />
              </div>
              <h3>Investment Tools</h3>
              <p>Start investing with as little as $1 in stocks, ETFs, and crypto from your account.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap gradient-cyan">
                <Smartphone size={24} />
              </div>
              <h3>Mobile First</h3>
              <p>A beautiful, intuitive mobile app that puts your entire bank in your pocket.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMOTIONS SECTION ===== */}
      <section className="promotions" id="promotions">
        <div className="container">
          <div className="section-header">
            <h2>Exclusive Promotions</h2>
            <p>Take advantage of these incredible offers before they expire.</p>
          </div>

          <div className="promo-grid">
            <div className="promo-card promo-featured">
              <div className="promo-badge">Most Popular</div>
              <div className="promo-icon-wrap">
                <BadgeDollarSign size={40} />
              </div>
              <h3>$300 Welcome Bonus</h3>
              <p>Open a new checking account and set up direct deposit to earn a $300 cash bonus within 60 days.</p>
              <ul className="promo-perks">
                <li><CheckCircle2 size={16} /> No minimum balance</li>
                <li><CheckCircle2 size={16} /> No monthly fees</li>
                <li><CheckCircle2 size={16} /> Free ATM access worldwide</li>
              </ul>
              <Link to="/login" className="btn btn-primary btn-lg">
                Claim Bonus <ChevronRight size={18} />
              </Link>
              <div className="promo-urgency">
                <Clock size={14} /> Offer ends April 30, 2026
              </div>
            </div>

            <div className="promo-card">
              <div className="promo-icon-wrap promo-icon-green">
                <Percent size={32} />
              </div>
              <h3>4.75% APY Savings</h3>
              <p>Earn 10x the national average with our high-yield savings account. No minimums, no catches.</p>
              <ul className="promo-perks">
                <li><CheckCircle2 size={16} /> Compounded daily</li>
                <li><CheckCircle2 size={16} /> FDIC insured up to $250K</li>
                <li><CheckCircle2 size={16} /> Withdraw anytime</li>
              </ul>
              <Link to="/login" className="btn btn-outline">
                Open Savings Account <ChevronRight size={18} />
              </Link>
            </div>

            <div className="promo-card">
              <div className="promo-icon-wrap promo-icon-purple">
                <Users size={32} />
              </div>
              <h3>Refer & Earn $100</h3>
              <p>Share Horizon Bank with friends and family. You both get $100 when they open an account.</p>
              <ul className="promo-perks">
                <li><CheckCircle2 size={16} /> Unlimited referrals</li>
                <li><CheckCircle2 size={16} /> Paid within 30 days</li>
                <li><CheckCircle2 size={16} /> No spending required</li>
              </ul>
              <Link to="/login" className="btn btn-outline">
                Start Referring <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><Star size={14} /> Reviews</span>
            <h2>What Our Customers Say</h2>
            <p>Join millions of satisfied customers who made the switch.</p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Small Business Owner',
                avatar: 'SM',
                color: '#38BDF8',
                quote: 'Switching to Horizon Bank was the best financial decision I\'ve made. The instant transfers and zero-fee business account saved me thousands.',
                rating: 5,
              },
              {
                name: 'David Chen',
                role: 'Software Engineer',
                avatar: 'DC',
                color: '#22C55E',
                quote: 'The smart savings feature helped me save $8,000 in just 6 months without even noticing. The app UX is incredible — light years ahead of my old bank.',
                rating: 5,
              },
              {
                name: 'Maria Rodriguez',
                role: 'Freelance Designer',
                avatar: 'MR',
                color: '#A78BFA',
                quote: 'I love the virtual cards feature for managing project payments. Each client gets their own card and spending limit. Pure genius!',
                rating: 5,
              },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p>"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1" />
          <div className="cta-shape cta-shape-2" />
        </div>
        <div className="container cta-content">
          <h2>Ready to Transform <br />Your Banking?</h2>
          <p>Join over 2 million customers who already trust Horizon Bank. Open your free account in under 5 minutes.</p>
          <div className="cta-actions">
            <Link to="/login" className="btn btn-primary btn-lg">
              Open Free Account <ArrowRight size={18} />
            </Link>
            <div className="cta-note">No credit check required · Cancel anytime</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
