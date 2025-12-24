import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = ({ setCurrentPage }) => {
  const statsRef = useRef([]);
  const animatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      statsRef.current.forEach((counter) => {
        if (!counter) return;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animateCounters();
            animatedRef.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      {/* Floating Icons */}
      <div className={`floating-icon icon-1 ${isVisible ? 'visible' : ''}`}>
        <i className="fas fa-cog"></i>
      </div>
      <div className={`floating-icon icon-2 ${isVisible ? 'visible' : ''}`}>
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className={`floating-icon icon-3 ${isVisible ? 'visible' : ''}`}>
        <i className="fas fa-file-alt"></i>
      </div>
      <div className={`floating-icon icon-4 ${isVisible ? 'visible' : ''}`}>
        <i className="fas fa-chart-bar"></i>
      </div>
      <div className={`floating-icon icon-5 ${isVisible ? 'visible' : ''}`}>
        <i className="fas fa-layer-group"></i>
      </div>

      <div className="container hero-container">
        {/* Hero Content */}
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Raqamli ta'lim texnologiyalarini
            <br />
            <span className="highlight">rivojlantirish markazi</span>
          </h1>

          <p className="hero-subtitle">
            Zamonaviy ta'lim yechimlari va innovatsion texnologiyalar bilan kelajakni birga quramiz
          </p>

          <div className="hero-buttons">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('aloqa'); }} className="btn btn-primary">
              Bog'lanish
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('ochiq-malumotlar'); }} className="btn btn-secondary">
              <i className="fas fa-info-circle"></i>
              Biz haqimizda
            </a>
          </div>

        </div>

        {/* Hero Cards Section */}
        <div className={`hero-cards ${isVisible ? 'visible' : ''}`}>
          {/* Card 1 - Image (tall) */}
          <div className="hero-card card-image">
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop" alt="Ta'lim" />
            </div>
          </div>

          {/* Card 2 - Clients (short) */}
          <div className="hero-card card-clients">
            <div className="clients-stat">
              <span className="stat-number" data-target="100" ref={(el) => (statsRef.current[0] = el)}>0</span>
              <span className="stat-plus">+</span>
            </div>
            <p>Hamkor tashkilotlar va universitetlar</p>
          </div>

          {/* Card 3 - Projects (tall) */}
          <div className="hero-card card-projects">
            <div className="card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="card-label">
              Talabalar soni <span className="badge-live"><i className="fas fa-circle"></i> Live</span>
            </div>
            <div className="card-value">
              <span className="value-number" data-target="10000" ref={(el) => (statsRef.current[1] = el)}>0</span>
              <span className="value-plus">+</span>
            </div>
            <div className="card-growth">
              <i className="fas fa-arrow-up"></i>
              <span>12% bu oy</span>
            </div>
          </div>

          {/* Card 4 - Years (short) */}
          <div className="hero-card card-years">
            <div className="years-stat">
              <span className="stat-number" data-target="10" ref={(el) => (statsRef.current[2] = el)}>0</span>
              <span className="stat-plus">+</span>
            </div>
            <p>Yillik tajriba va xizmat</p>
          </div>

          {/* Card 5 - Feature (tall) */}
          <div className="hero-card card-feature">
            <div className="feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Optimal samaradorlik va yuqori natijalar</h3>
            <p>Zamonaviy ta'lim metodlari</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
