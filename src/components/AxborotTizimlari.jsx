import { useState } from 'react';
import './AxborotTizimlari.css';

const AxborotTizimlari = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Barchasi', icon: 'fas fa-th-large' },
    { id: 'education', name: "Ta'lim", icon: 'fas fa-graduation-cap' },
    { id: 'management', name: 'Boshqaruv', icon: 'fas fa-tasks' },
    { id: 'resources', name: 'Resurslar', icon: 'fas fa-database' },
    { id: 'services', name: 'Xizmatlar', icon: 'fas fa-concierge-bell' },
  ];

  const systems = [
    {
      id: 1,
      name: "HEMIS",
      fullName: "Higher Education Management Information System",
      description: "Oliy ta'lim muassasalarini boshqarish uchun yagona axborot tizimi. Talabalar, o'qituvchilar va ma'muriyat uchun barcha ma'lumotlarni bir joyda jamlaydi.",
      icon: "fas fa-graduation-cap",
      category: "education",
      color: "#10b981",
      stats: { users: "500K+", institutions: "150+", modules: "25+" },
      features: ["Talabalar ro'yxati", "O'quv jarayoni", "Moliyaviy hisobot", "Statistika"],
      link: "https://hemis.uz"
    },
    {
      id: 2,
      name: "EMIS",
      fullName: "Education Management Information System",
      description: "Umumiy o'rta ta'lim tizimini boshqarish platformasi. Maktablar, o'qituvchilar va o'quvchilar haqida to'liq ma'lumot bazasi.",
      icon: "fas fa-school",
      category: "management",
      color: "#059669",
      stats: { users: "2M+", schools: "10K+", teachers: "400K+" },
      features: ["Maktab ma'lumotlari", "O'quvchilar bazasi", "O'qituvchilar", "Hisobotlar"],
      link: "https://emis.uz"
    },
    {
      id: 3,
      name: "E-KUTUBXONA",
      fullName: "Elektron kutubxona tizimi",
      description: "Milliy elektron kutubxona tizimi. Minglab kitoblar, ilmiy maqolalar va o'quv qo'llanmalariga onlayn kirish imkoniyati.",
      icon: "fas fa-book-open",
      category: "resources",
      color: "#047857",
      stats: { books: "100K+", users: "1M+", downloads: "5M+" },
      features: ["Elektron kitoblar", "Ilmiy maqolalar", "Audio kitoblar", "Qidiruv"],
      link: "https://kutubxona.uz"
    },
    {
      id: 4,
      name: "ONLINE DARS",
      fullName: "Masofaviy ta'lim platformasi",
      description: "Masofaviy ta'lim va onlayn darslar o'tkazish uchun zamonaviy platforma. Video darslar, testlar va interaktiv materiallar.",
      icon: "fas fa-video",
      category: "education",
      color: "#10b981",
      stats: { courses: "5K+", students: "300K+", videos: "50K+" },
      features: ["Video darslar", "Jonli efir", "Testlar", "Sertifikatlar"],
      link: "https://online-dars.uz"
    },
    {
      id: 5,
      name: "E-IMTIHON",
      fullName: "Elektron test va baholash tizimi",
      description: "Imtihonlar va testlarni onlayn o'tkazish tizimi. Avtomatik baholash, natijalar tahlili va sertifikatlash.",
      icon: "fas fa-clipboard-check",
      category: "services",
      color: "#059669",
      stats: { tests: "10K+", attempts: "5M+", certificates: "500K+" },
      features: ["Test yaratish", "Avtomatik baholash", "Natijalar", "Sertifikatlar"],
      link: "https://e-imtihon.uz"
    },
    {
      id: 6,
      name: "TALABA.UZ",
      fullName: "Talabalar uchun yagona portal",
      description: "Talabalar uchun barcha xizmatlarni birlashtirgan portal. Stipendiya, yotoqxona, kutubxona va boshqa xizmatlar.",
      icon: "fas fa-user-graduate",
      category: "services",
      color: "#047857",
      stats: { students: "800K+", services: "50+", applications: "2M+" },
      features: ["Shaxsiy kabinet", "Stipendiya", "Yotoqxona", "Arizalar"],
      link: "https://talaba.uz"
    },
    {
      id: 7,
      name: "USTOZ.UZ",
      fullName: "O'qituvchilar portali",
      description: "O'qituvchilar uchun maxsus portal. Malaka oshirish, metodik materiallar va kasbiy rivojlanish imkoniyatlari.",
      icon: "fas fa-chalkboard-teacher",
      category: "education",
      color: "#10b981",
      stats: { teachers: "400K+", courses: "2K+", certificates: "300K+" },
      features: ["Malaka oshirish", "Materiallar", "Webinarlar", "Forum"],
      link: "https://ustoz.uz"
    },
    {
      id: 8,
      name: "MAKTAB.UZ",
      fullName: "Maktab boshqaruv tizimi",
      description: "Maktablarni raqamli boshqarish tizimi. Dars jadvallari, baholar, davomat va ota-onalar bilan aloqa.",
      icon: "fas fa-building",
      category: "management",
      color: "#059669",
      stats: { schools: "10K+", students: "6M+", parents: "4M+" },
      features: ["Dars jadvali", "Kundalik", "Baholar", "Xabarlar"],
      link: "https://maktab.uz"
    },
    {
      id: 9,
      name: "E-JURNAL",
      fullName: "Elektron jurnal tizimi",
      description: "Elektron kundalik va jurnal tizimi. O'qituvchilar uchun baholarni kiritish, ota-onalar uchun kuzatish imkoniyati.",
      icon: "fas fa-journal-whills",
      category: "management",
      color: "#047857",
      stats: { journals: "50K+", entries: "100M+", users: "5M+" },
      features: ["Baholar", "Davomat", "Vazifalar", "Statistika"],
      link: "https://e-jurnal.uz"
    },
    {
      id: 10,
      name: "MALAKA",
      fullName: "Malaka oshirish tizimi",
      description: "Pedagog kadrlar malakasini oshirish va qayta tayyorlash tizimi. Kurslar, treninglar va sertifikatlash.",
      icon: "fas fa-certificate",
      category: "education",
      color: "#10b981",
      stats: { courses: "1K+", graduates: "200K+", trainers: "500+" },
      features: ["Kurslar", "Treninglar", "Attestatsiya", "Sertifikatlar"],
      link: "https://malaka.uz"
    },
    {
      id: 11,
      name: "DATA.EDU",
      fullName: "Ta'lim ma'lumotlari portali",
      description: "Ta'lim sohasidagi ochiq ma'lumotlar portali. Statistika, tahlillar va hisobotlarga kirish imkoniyati.",
      icon: "fas fa-chart-bar",
      category: "resources",
      color: "#059669",
      stats: { datasets: "500+", reports: "1K+", downloads: "100K+" },
      features: ["Statistika", "Tahlillar", "Hisobotlar", "API"],
      link: "https://data.edu.uz"
    },
    {
      id: 12,
      name: "EDU.UZ",
      fullName: "Ta'lim portali",
      description: "O'zbekiston Respublikasi ta'lim tizimining rasmiy portali. Yangiliklar, qonunchilik va foydali ma'lumotlar.",
      icon: "fas fa-globe",
      category: "services",
      color: "#047857",
      stats: { visitors: "10M+", news: "5K+", documents: "2K+" },
      features: ["Yangiliklar", "Qonunchilik", "Loyihalar", "Bog'lanish"],
      link: "https://edu.uz"
    },
  ];

  const filteredSystems = systems.filter(system => {
    const matchesCategory = activeCategory === 'all' || system.category === activeCategory;
    const matchesSearch = system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="axborot-tizimlari-page">
      <div className="container">
        {/* Hero Section */}
        <div className="at-hero">
          <div className="at-hero-content">
            <span className="at-badge">
              <i className="fas fa-layer-group"></i>
              Raqamli ta'lim platformalari
            </span>
            <h1 className="at-title">Axborot Tizimlari</h1>
            <p className="at-subtitle">
              Ta'lim sohasidagi barcha raqamli platformalar va axborot tizimlariga
              yagona nuqtadan kirish imkoniyati
            </p>

            {/* Search */}
            <div className="at-search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Tizimlarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="at-stats">
          <div className="at-stat">
            <div className="at-stat-icon">
              <i className="fas fa-server"></i>
            </div>
            <div className="at-stat-info">
              <span className="at-stat-value">12+</span>
              <span className="at-stat-label">Axborot tizimlari</span>
            </div>
          </div>
          <div className="at-stat">
            <div className="at-stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="at-stat-info">
              <span className="at-stat-value">10M+</span>
              <span className="at-stat-label">Faol foydalanuvchilar</span>
            </div>
          </div>
          <div className="at-stat">
            <div className="at-stat-icon">
              <i className="fas fa-university"></i>
            </div>
            <div className="at-stat-info">
              <span className="at-stat-value">15K+</span>
              <span className="at-stat-label">Ta'lim muassasalari</span>
            </div>
          </div>
          <div className="at-stat">
            <div className="at-stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="at-stat-info">
              <span className="at-stat-value">24/7</span>
              <span className="at-stat-label">Doimiy ishlash</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="at-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`at-category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Systems Grid */}
        <div className="at-systems-grid">
          {filteredSystems.map((system, index) => (
            <a
              href={system.link}
              target="_blank"
              rel="noopener noreferrer"
              key={system.id}
              className="at-system-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="at-card-header">
                <div className="at-card-icon" style={{ background: `linear-gradient(135deg, ${system.color} 0%, ${system.color}dd 100%)` }}>
                  <i className={system.icon}></i>
                </div>
                <div className="at-card-badge">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>

              <div className="at-card-content">
                <h3 className="at-card-name">{system.name}</h3>
                <p className="at-card-fullname">{system.fullName}</p>
                <p className="at-card-desc">{system.description}</p>
              </div>

              <div className="at-card-features">
                {system.features.map((feature, i) => (
                  <span key={i} className="at-feature-tag">
                    <i className="fas fa-check"></i>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="at-card-stats">
                {Object.entries(system.stats).map(([key, value]) => (
                  <div key={key} className="at-card-stat">
                    <span className="at-card-stat-value">{value}</span>
                    <span className="at-card-stat-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="at-card-footer">
                <span className="at-card-link">
                  Tizimga kirish
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="at-cta">
          <div className="at-cta-content">
            <h2>Barcha tizimlarga yagona kirish</h2>
            <p>Single Sign-On (SSO) orqali bir marta ro'yxatdan o'ting va barcha tizimlarga kiring</p>
          </div>
          <div className="at-cta-actions">
            <a href="#" className="at-cta-btn primary">
              <i className="fas fa-sign-in-alt"></i>
              Kirish
            </a>
            <a href="#" className="at-cta-btn secondary">
              <i className="fas fa-user-plus"></i>
              Ro'yxatdan o'tish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxborotTizimlari;
