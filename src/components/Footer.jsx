import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Social */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="footer-logo-text">
                <span>RAQAMLI TA'LIM TEXNOLOGIYALARINI</span>
                <span>RIVOJLANTIRISH MARKAZI</span>
              </div>
            </div>
            <p className="footer-social-text">
              Ijtimoiy tarmoqlardagi sahifalarimizga a'zo bo'ling!
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Telegram">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p className="footer-disclaimer">
              Sayt materiallaridan to'liq yoki qisman foydalanilganida ushbu manbani ko'rsatish majburiy
            </p>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-title">ALOQA</h4>
            <ul className="footer-list">
              <li>
                <span className="footer-label">Email:</span>
                <a href="mailto:etm@edu.uz">etm@edu.uz</a>
              </li>
              <li>
                <span className="footer-label">Telefon:</span>
                <a href="tel:+998712031324">(+998 71) 203-13-24</a>
              </li>
              <li className="footer-address">
                <span className="footer-label">Manzil:</span>
                <span>100095 Toshkent shahri, Olmazor, Ziyo ko'chasi, 3</span>
              </li>
            </ul>
          </div>

          {/* Info Service */}
          <div className="footer-column">
            <h4 className="footer-title">AXBOROT XIZMATI</h4>
            <ul className="footer-links">
              <li><a href="#">Yangiliklar</a></li>
              <li><a href="#">E'lonlar</a></li>
              <li><a href="#">Ko'p beriladigan savollar</a></li>
            </ul>
          </div>

          {/* Center */}
          <div className="footer-column">
            <h4 className="footer-title">MARKAZ</h4>
            <ul className="footer-links">
              <li><a href="#">Rahbariyat</a></li>
              <li><a href="#">Bo'limlar</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              @ 2025 - Raqamli ta'lim texnologiyalarini rivojlantirish markazi
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Button */}
      <button
        className="quick-contact-btn"
        onClick={() => setShowContact(!showContact)}
      >
        <i className="fas fa-headset"></i>
        <span>Tezkor aloqa</span>
      </button>

      {/* Scroll to Top */}
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
