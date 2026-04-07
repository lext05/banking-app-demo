import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-left-content">
          <Link to="/" className="login-brand">
            <Building2 size={32} />
            <span>Horizon Bank</span>
          </Link>

          <div className="login-left-hero">
            <h1>Welcome Back</h1>
            <p>Sign in to access your accounts, manage finances, and stay on top of your financial goals.</p>
          </div>

          <div className="login-features">
            <div className="login-feature">
              <div className="login-feature-icon">
                <Shield size={20} />
              </div>
              <div>
                <strong>Secure Banking</strong>
                <span>256-bit encryption protects all transactions</span>
              </div>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <strong>FDIC Insured</strong>
                <span>Your deposits are protected up to $250,000</span>
              </div>
            </div>
          </div>

          <div className="login-left-visual">
            <div className="login-visual-card">
              <div className="login-visual-row">
                <span className="login-visual-dot green" />
                <span>Checking ••4829</span>
                <strong>$12,450.00</strong>
              </div>
              <div className="login-visual-row">
                <span className="login-visual-dot blue" />
                <span>Savings ••7103</span>
                <strong>$24,563.00</strong>
              </div>
              <div className="login-visual-row">
                <span className="login-visual-dot amber" />
                <span>Investment ••2091</span>
                <strong>$8,920.00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          {success ? (
            <div className="login-success">
              <div className="login-success-icon">
                <CheckCircle2 size={48} />
              </div>
              <h2>Login Successful!</h2>
              <p>Welcome back. Redirecting to your dashboard...</p>
            </div>
          ) : (
            <>
              <div className="login-form-header">
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account</p>
              </div>

              {error && (
                <div className="login-error">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label-row">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>
                  <div className="input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-group remember-group">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Remember this device
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg login-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner" />
                  ) : (
                    <>Sign In <ArrowRight size={18} /></>
                  )}
                </button>
              </form>

              <div className="login-divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="social-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button className="social-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.44zm4.565 17.44c-.413.96-.612 1.39-1.145 2.23-.746 1.18-1.8 2.65-3.105 2.66-1.158.01-1.455-.755-3.027-.745-1.572.01-1.9.76-3.058.75-1.305-.01-2.3-1.34-3.045-2.52C5.08 17.98 4.336 13.51 5.96 10.64c1.147-2.03 3.093-3.22 4.95-3.22 1.47 0 2.394.99 3.61.99 1.18 0 1.9-1 3.6-1 1.34 0 2.97.73 4.05 2 .1.05-2.41 1.4-2.24 4.19.19 3.34 2.93 4.45 2.96 4.46z"/>
                  </svg>
                  Apple
                </button>
              </div>

              <div className="login-footer">
                Don't have an account? <Link to="/login">Create one now</Link>
              </div>

              <div className="login-demo-hint">
                <strong>Demo Credentials:</strong> demo@horizonbank.com / password123
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
