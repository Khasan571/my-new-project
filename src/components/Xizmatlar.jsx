import './Xizmatlar.css';

const Xizmatlar = ({ setCurrentPage }) => {
  const services = [
    {
      id: 1,
      icon: "fas fa-database",
      title: "Axborot tizimlari yaratish xizmati",
      description: "Ta'lim muassasalari uchun maxsus axborot tizimlarini loyihalash va ishlab chiqish.",
      features: ["LMS", "API integratsiya", "Ma'lumotlar bazasi"],
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: "fas fa-server",
      title: "Veb-hosting xizmati",
      description: "Ishonchli serverlar, SSL va 24/7 texnik yordam bilan veb-hosting xizmati.",
      features: ["SSL sertifikat", "DDoS himoya", "24/7 yordam"],
      color: "#10b981"
    }
  ];

  return (
    <section className="xizmatlar-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="xizmatlar-header">
          <div className="header-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h1>Xizmatlar</h1>
          <p>Markaz tomonidan ko'rsatiladigan IT xizmatlari</p>
        </div>

        {/* Services Grid */}
        <div className="xizmatlar-grid">
          {services.map((service) => (
            <div key={service.id} className="xizmat-card">
              <div className="xizmat-icon" style={{ background: service.color }}>
                <i className={service.icon}></i>
              </div>

              <div className="xizmat-content">
                <h3 className="xizmat-title">{service.title}</h3>
                <p className="xizmat-description">{service.description}</p>

                <div className="xizmat-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag" style={{ color: service.color, borderColor: service.color }}>
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="btn-order" style={{ background: service.color }}>
                  <span>Batafsil</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="xizmatlar-contact">
          <h3>Bog'lanish</h3>
          <div className="contact-buttons">
            <a href="tel:+998712031324" className="contact-btn phone">
              <i className="fas fa-phone-alt"></i>
              <span>+998 71 203-13-24</span>
            </a>
            <a href="mailto:etm@edu.uz" className="contact-btn email">
              <i className="fas fa-envelope"></i>
              <span>etm@edu.uz</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Xizmatlar;
