import './Korrupsiya.css';

const Korrupsiya = ({ setCurrentPage }) => {
  const contactInfo = {
    phone: "71-203-1324",
    email: "etm@edu.uz",
    telegram: "@raqamli_talim_antikorrupsiyabot"
  };

  return (
    <section className="korrupsiya-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="korrupsiya-header">
          <div className="header-badge">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1>Korrupsiyaga qarshi kurash</h1>
          <p>Raqamli ta'lim texnologiyalarini rivojlantirish markazi korrupsiyaga qarshi kurash dasturi</p>
        </div>

        {/* Main Content */}
        <div className="korrupsiya-content">
          {/* Banner Section - Similar to original image */}
          <div className="korrupsiya-banner-section">
            {/* Header with logo */}
            <div className="banner-header">
              <div className="banner-logo">
                <i className="fas fa-book-reader"></i>
              </div>
              <div className="banner-org-name">
                <span>RAQAMLI TA'LIM TEXNOLOGIYALARINI</span>
                <span>RIVOJLANTIRISH MARKAZI</span>
              </div>
            </div>

            {/* Main visual */}
            <div className="banner-main">
              {/* Globe background */}
              <div className="globe-bg">
                <i className="fas fa-globe-americas"></i>
              </div>

              {/* Stop sign with hands */}
              <div className="prohibition-sign">
                <div className="sign-circle">
                  <div className="sign-line"></div>
                  <div className="hands-exchange">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* City silhouette */}
            <div className="city-bg">
              <div className="building b1"></div>
              <div className="building b2"></div>
              <div className="building b3"></div>
              <div className="building b4"></div>
              <div className="building b5"></div>
              <div className="building b6"></div>
              <div className="building b7"></div>
              <div className="building b8"></div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="korrupsiya-contact-section">
            <div className="contact-header">
              <i className="fas fa-headset"></i>
              <h2>Murojaat uchun</h2>
            </div>
            <p className="contact-description">
              Korrupsiya holatlari to'g'risida xabar berish uchun quyidagi aloqa vositalaridan foydalaning
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon phone">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Ishonch telefoni</span>
                  <a href={`tel:+998${contactInfo.phone.replace(/-/g, '')}`} className="contact-card-value">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon email">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">eMail</span>
                  <a href={`mailto:${contactInfo.email}`} className="contact-card-value">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon telegram">
                  <i className="fab fa-telegram-plane"></i>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Telegram bot</span>
                  <a href={`https://t.me/${contactInfo.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="contact-card-value">
                    {contactInfo.telegram}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Ijtimoiy tarmoqlar</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon telegram-social" aria-label="Telegram">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="#" className="social-icon instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="korrupsiya-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-gavel"></i>
            </div>
            <h3>Qonunchilik</h3>
            <p>Korrupsiyaga qarshi kurash to'g'risidagi O'zbekiston Respublikasi qonunlari</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3>Himoya</h3>
            <p>Xabar beruvchilar maxfiyligi va huquqlari kafolatlanadi</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Adolat</h3>
            <p>Har bir murojaat ko'rib chiqiladi va tegishli choralar ko'riladi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Korrupsiya;
