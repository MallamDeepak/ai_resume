import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="nav-logo">
          <span className="logo-text">ResumeBuilder</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-orange">AI Resume Builder:</span>
            <br />
            <span className="highlight-white">Craft Your Perfect Resume in Minutes!</span>
          </h1>
          <h2 className="hero-subtitle">AI Resume Builder</h2>
          <p className="hero-description">
            AI-Powered Content, Professional Templates, ATS-Friendly.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              <span className="btn-icon">✨</span>
              Start Building for Free
            </Link>
            <Link to="/login" className="btn-secondary">
              View Templates
            </Link>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-card">
            <div className="preview-header">
              <span className="preview-logo">ResumeBuilder</span>
              <span className="preview-title">Top Resume Templates</span>
            </div>
            <div className="preview-templates">
              <div className="template-card">
                <div className="template-preview template-1">
                  <div className="template-avatar"></div>
                  <div className="template-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <span className="template-name">Chronological</span>
              </div>
              <div className="template-card featured">
                <div className="template-preview template-2">
                  <div className="template-avatar"></div>
                  <div className="template-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <span className="template-name">Functional</span>
              </div>
              <div className="template-card">
                <div className="template-preview template-3">
                  <div className="template-avatar"></div>
                  <div className="template-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <span className="template-name">Creative</span>
              </div>
            </div>
            <div className="preview-features">
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <span>AI Content Suggestions</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Smart Formatting</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>ATS Optimization Check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Tabs */}
      <div className="audience-tabs">
        <button className="tab-btn active">
          <span className="tab-icon">🎓</span>
          For Students
        </button>
        <button className="tab-btn">
          <span className="tab-icon">👥</span>
          For HR Teams
        </button>
        <button className="tab-btn">
          <span className="tab-icon">🏛️</span>
          For Faculty
        </button>
      </div>

    </div>
  );
}

export default Home;
