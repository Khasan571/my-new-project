import { useState } from 'react';
import './TashkiliyTuzilma.css';

const TashkiliyTuzilma = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('structure');

  const director = {
    name: "Islomov Sardor Shavkatovich",
    position: "Direktor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  };

  const departments = [
    {
      id: 1,
      name: "Korporativ tarmoqni boshqarish va axborot xavfsizligi bo'limi",
      head: "Karimov Jasur Bahodirovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop",
      employees: 10,
      description: "Korporativ tarmoq infratuzilmasini boshqarish va axborot xavfsizligini ta'minlash",
      tasks: [
        "Tarmoq infratuzilmasini boshqarish",
        "Axborot xavfsizligini ta'minlash",
        "Kiberhujumlardan himoya qilish"
      ]
    },
    {
      id: 2,
      name: "Axborot tizimlarini texnik qo'llab-quvvatlash va tahlil qilish bo'limi",
      head: "Rahimov Sardor Akmalovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop",
      employees: 8,
      description: "Axborot tizimlarini texnik qo'llab-quvvatlash va samaradorlikni tahlil qilish",
      tasks: [
        "Texnik qo'llab-quvvatlash",
        "Tizim samaradorligini tahlil qilish",
        "Muammolarni bartaraf etish"
      ]
    },
    {
      id: 3,
      name: "Axborot tizimlarini loyihalashtirish va ishlab chiqish bo'limi",
      head: "Toshmatov Bobur Rustamovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=350&fit=crop",
      employees: 12,
      description: "Yangi axborot tizimlarini loyihalashtirish va dasturiy ta'minot ishlab chiqish",
      tasks: [
        "Tizimlarni loyihalashtirish",
        "Dasturiy ta'minot ishlab chiqish",
        "Texnik hujjatlarni tayyorlash"
      ]
    },
    {
      id: 4,
      name: "Axborot tizimlarini joriy etish va rivojlantirish bo'limi",
      head: "Abdullayev Sherzod Karimovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=350&fit=crop",
      employees: 9,
      description: "Axborot tizimlarini joriy etish, yangilash va rivojlantirish",
      tasks: [
        "Tizimlarni joriy etish",
        "Mavjud tizimlarni yangilash",
        "Integratsiya ishlari"
      ]
    },
    {
      id: 5,
      name: "Buxgalteriya",
      head: "Rahimova Nilufar Akmalovna",
      headPosition: "Bosh hisobchi",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=350&fit=crop",
      employees: 5,
      description: "Moliyaviy hisobotlar va buxgalteriya hisobi",
      tasks: [
        "Moliyaviy hisobotlar",
        "Buxgalteriya hisobi",
        "Soliq hisobotlari"
      ]
    },
    {
      id: 6,
      name: "Interaktiv davlat xizmatlarni joriy etish bo'limi",
      head: "Nazarov Akmal Olimovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=350&fit=crop",
      employees: 7,
      description: "Interaktiv davlat xizmatlarini joriy etish va rivojlantirish",
      tasks: [
        "Davlat xizmatlarini raqamlashtirish",
        "Elektron hukumat loyihalari",
        "Foydalanuvchilar bilan ishlash"
      ]
    }
  ];

  const stats = [
    { icon: "fas fa-users", value: "200+", label: "Xodimlar" },
    { icon: "fas fa-building", value: "6", label: "Bo'limlar" },
    { icon: "fas fa-project-diagram", value: "50+", label: "Loyihalar" },
    { icon: "fas fa-handshake", value: "30+", label: "Hamkorlar" }
  ];

  return (
    <section className="tashkiliy-tuzilma">
      <div className="tuzilma-bg"></div>
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="tuzilma-header">
          <span className="tuzilma-badge">Tashkilot</span>
          <h1 className="tuzilma-title">
            Tashkiliy <span className="text-gradient">tuzilma</span>
          </h1>
          <p className="tuzilma-subtitle">
            Raqamli ta'lim texnologiyalarini rivojlantirish markazi tuzilmasi va bo'limlari
          </p>
        </div>

        {/* Stats */}
        <div className="tuzilma-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tuzilma-tabs">
          <button
            className={`tab-btn ${activeTab === 'structure' ? 'active' : ''}`}
            onClick={() => setActiveTab('structure')}
          >
            <i className="fas fa-sitemap"></i>
            <span>Ierarxik tuzilma</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'departments' ? 'active' : ''}`}
            onClick={() => setActiveTab('departments')}
          >
            <i className="fas fa-th-large"></i>
            <span>Bo'limlar</span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'structure' ? (
          <div className="org-chart">
            {/* Director */}
            <div className="org-level director-level">
              <div className="org-card director-card-main">
                <div className="org-card-image">
                  <img src={director.image} alt={director.name} />
                </div>
                <div className="org-card-info">
                  <span className="org-card-position">{director.position}</span>
                  <h3 className="org-card-name">{director.name}</h3>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="org-connector">
              <div className="connector-line vertical"></div>
              <div className="connector-line horizontal"></div>
            </div>

            {/* Departments */}
            <div className="org-level departments-level">
              {departments.map((dept) => (
                <div key={dept.id} className="org-card department-card">
                  <div className="dept-connector"></div>
                  <div className="org-card-image small">
                    <img src={dept.image} alt={dept.head} />
                  </div>
                  <div className="org-card-info">
                    <span className="org-card-department">{dept.name}</span>
                    <h4 className="org-card-name">{dept.head}</h4>
                    <span className="org-card-position">{dept.headPosition}</span>
                  </div>
                  <div className="org-card-badge">
                    <i className="fas fa-users"></i>
                    <span>{dept.employees}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="departments-grid">
            {departments.map((dept) => (
              <div key={dept.id} className="department-detail-card">
                <div className="dept-header">
                  <div className="dept-image">
                    <img src={dept.image} alt={dept.head} />
                  </div>
                  <div className="dept-title">
                    <h3>{dept.name}</h3>
                    <p>{dept.head}</p>
                    <span className="dept-position">{dept.headPosition}</span>
                  </div>
                </div>
                <p className="dept-description">{dept.description}</p>
                <div className="dept-tasks">
                  <h4><i className="fas fa-tasks"></i> Asosiy vazifalar</h4>
                  <ul>
                    {dept.tasks.map((task, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dept-footer">
                  <div className="dept-stat">
                    <i className="fas fa-users"></i>
                    <span>{dept.employees} xodim</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TashkiliyTuzilma;
