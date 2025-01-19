import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Opined</h1>
        <p style={styles.heroSubtitle}>
          A platform to express your opinions, connect with like-minded individuals, and make your voice heard.
        </p>
        <button style={styles.heroButton}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Choose Opined?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureItem}>
            <h3 style={styles.featureTitle}>Express Yourself</h3>
            <p>Share your opinions on trending topics and let the world know what you think.</p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.featureTitle}>Connect with Others</h3>
            <p>Engage in meaningful discussions with a vibrant community.</p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.featureTitle}>Privacy First</h3>
            <p>Your data is safe with us. We prioritize transparency and security.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>What Users Say</h2>
        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialItem}>
            <p>
              "Opined is the best platform to share my thoughts. The community is amazing!"
            </p>
            <span>- Shashank Kumar</span>
          </div>
          <div style={styles.testimonialItem}>
            <p>
              "I love how easy it is to connect with like-minded individuals on Opined."
            </p>
            <span>- Ayush Shrivastava</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Opined. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  hero: {
    background: 'linear-gradient(to right, #2e74b5, #4caf50)',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '18px',
    margin: '10px 0 20px',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    background: '#ff9800',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  features: {
    padding: '40px 20px',
    background: '#f9f9f9',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '28px',
    margin: '20px 0',
    color: '#2e74b5',
  },
  featureGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  featureItem: {
    flex: '1 1 30%',
    maxWidth: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#fff',
  },
  featureTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#4caf50',
  },
  testimonials: {
    padding: '40px 20px',
    background: '#e8f5e9',
    textAlign: 'center',
  },
  testimonialGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  testimonialItem: {
    flex: '1 1 40%',
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#fff',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: '#2e74b5',
    color: '#fff',
  },
};

export default LandingPage;
