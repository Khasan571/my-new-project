import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-globe",
      title: "Veb saytlar yaratish",
      description: "Zamonaviy va responsive veb saytlar yaratish xizmati.",
      features: ["Responsive", "SEO"],
    },
    {
      id: 2,
      icon: "fas fa-database",
      title: "Axborot tizimlari yaratish",
      description: "Maxsus axborot tizimlarini loyihalash va ishlab chiqish.",
      features: ["CRM", "ERP"],
    },
    {
      id: 3,
      icon: "fas fa-mobile-alt",
      title: "Android dasturlar yaratish",
      description: "Android uchun mobil ilovalar yaratish xizmati.",
      features: ["Native", "UI/UX"],
    },
    {
      id: 4,
      icon: "fas fa-headset",
      title: "Texnik yordam ko'rsatish",
      description: "IT infratuzilmani qo'llab-quvvatlash xizmati.",
      features: ["24/7", "Online"],
    },
    {
      id: 5,
      icon: "fas fa-server",
      title: "Veb Hosting",
      description: "Ishonchli veb hosting va domen xizmatlari.",
      features: ["SSL", "Backup"],
    },
  ];

  return (
    <section className="services" id="services-page">
      <div className="container">
        <div className="services-header">
          <span className="services-badge">Xizmatlar</span>
          <h2 className="services-title">
            Bizning <span className="text-blue">xizmatlarimiz</span>
          </h2>
          <p className="services-subtitle">
            Professional IT xizmatlari bilan biznesingizni raqamli dunyoga olib chiqing
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className="service-link">
                Batafsil
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
