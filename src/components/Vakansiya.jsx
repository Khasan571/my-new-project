import { useState } from 'react';
import './Vakansiya.css';

const Vakansiya = ({ setCurrentPage }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState('all');

  const vacancies = [
    {
      id: 1,
      title: "Frontend dasturchi",
      department: "Axborot texnologiyalari bo'limi",
      type: "full-time",
      typeLabel: "To'liq stavka",
      location: "Toshkent",
      salary: "8 - 12 mln",
      experience: "2+ yil",
      deadline: "2025-01-15",
      icon: "fas fa-code",
      color: "#3b82f6",
      requirements: [
        "React.js yoki Vue.js da 2+ yil tajriba",
        "HTML5, CSS3, JavaScript (ES6+) bilimi",
        "REST API bilan ishlash tajribasi",
        "Git versiya nazorati tizimi bilimi"
      ],
      responsibilities: [
        "Foydalanuvchi interfeyslarini ishlab chiqish",
        "Responsive dizaynlarni yaratish",
        "Backend bilan integratsiya"
      ]
    },
    {
      id: 2,
      title: "Backend dasturchi",
      department: "Axborot texnologiyalari bo'limi",
      type: "full-time",
      typeLabel: "To'liq stavka",
      location: "Toshkent",
      salary: "10 - 15 mln",
      experience: "3+ yil",
      deadline: "2025-01-20",
      icon: "fas fa-server",
      color: "#8b5cf6",
      requirements: [
        "Python (Django/FastAPI) yoki Node.js da 3+ yil tajriba",
        "PostgreSQL, MongoDB ma'lumotlar bazalari bilimi",
        "RESTful API dizayn qilish",
        "Docker va CI/CD tajribasi"
      ],
      responsibilities: [
        "API va backend xizmatlarini ishlab chiqish",
        "Ma'lumotlar bazasini loyihalash",
        "Tizim arxitekturasini optimallashtirish"
      ]
    },
    {
      id: 3,
      title: "UI/UX dizayner",
      department: "Kreativ bo'lim",
      type: "full-time",
      typeLabel: "To'liq stavka",
      location: "Toshkent",
      salary: "7 - 10 mln",
      experience: "2+ yil",
      deadline: "2025-01-25",
      icon: "fas fa-palette",
      color: "#ec4899",
      requirements: [
        "Figma, Adobe XD dasturlarida tajriba",
        "UI/UX dizayn tamoyillarini bilish",
        "Prototip va wireframe yaratish",
        "Portfolio mavjudligi shart"
      ],
      responsibilities: [
        "Foydalanuvchi interfeyslarini dizayn qilish",
        "User research o'tkazish",
        "Dizayn tizimlarini yaratish"
      ]
    },
    {
      id: 4,
      title: "DevOps muhandisi",
      department: "Infratuzilma bo'limi",
      type: "full-time",
      typeLabel: "To'liq stavka",
      location: "Masofadan",
      salary: "12 - 18 mln",
      experience: "3+ yil",
      deadline: "2025-02-01",
      icon: "fas fa-cloud",
      color: "#10b981",
      requirements: [
        "AWS, GCP yoki Azure platformalarida tajriba",
        "Docker, Kubernetes bilimi",
        "CI/CD pipeline yaratish",
        "Linux server administratsiyasi"
      ],
      responsibilities: [
        "Infratuzilmani boshqarish",
        "Avtomatlashtirish skriptlarini yozish",
        "Monitoring tizimlarini sozlash"
      ]
    },
    {
      id: 5,
      title: "Loyiha menejeri",
      department: "Boshqaruv bo'limi",
      type: "full-time",
      typeLabel: "To'liq stavka",
      location: "Toshkent",
      salary: "10 - 14 mln",
      experience: "4+ yil",
      deadline: "2025-01-30",
      icon: "fas fa-tasks",
      color: "#f59e0b",
      requirements: [
        "IT loyihalarini boshqarishda 4+ yil tajriba",
        "Agile/Scrum metodologiyalari bilimi",
        "Jira, Trello kabi vositalar bilan ishlash",
        "Yaxshi kommunikatsiya qobiliyati"
      ],
      responsibilities: [
        "Loyihalarni rejalashtirish va boshqarish",
        "Jamoa bilan ishlash",
        "Mijozlar bilan muloqot"
      ]
    },
    {
      id: 6,
      title: "Kontent menejeri",
      department: "Marketing bo'limi",
      type: "part-time",
      typeLabel: "Yarim stavka",
      location: "Masofadan",
      salary: "4 - 6 mln",
      experience: "1+ yil",
      deadline: "2025-02-10",
      icon: "fas fa-pen-fancy",
      color: "#06b6d4",
      requirements: [
        "O'zbek va rus tillarida yozish qobiliyati",
        "SEO asoslarini bilish",
        "Ijodiy yondashuv",
        "Muddatlarga rioya qilish"
      ],
      responsibilities: [
        "Kontent strategiyasini ishlab chiqish",
        "Maqolalar va postlar yozish",
        "SEO optimizatsiya"
      ]
    }
  ];

  const filterOptions = [
    { value: 'all', label: "Barchasi", count: vacancies.length },
    { value: 'full-time', label: "To'liq stavka", count: vacancies.filter(v => v.type === 'full-time').length },
    { value: 'part-time', label: "Yarim stavka", count: vacancies.filter(v => v.type === 'part-time').length }
  ];

  const filteredVacancies = filter === 'all'
    ? vacancies
    : vacancies.filter(v => v.type === filter);

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="vakansiya-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="vakansiya-header">
          <div className="header-content">
            <h1>Bo'sh ish o'rinlari</h1>
            <p>Professional jamoamizga qo'shiling va ta'lim sohasini birga rivojlantiramiz</p>
          </div>
          <div className="header-stats">
            <div className="header-stat">
              <span className="stat-num">{vacancies.length}</span>
              <span className="stat-label">Ochiq vakansiya</span>
            </div>
            <div className="header-stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Jamoa a'zolari</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={`filter-tab ${filter === option.value ? 'active' : ''}`}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
              <span className="tab-count">{option.count}</span>
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="jobs-list">
          {filteredVacancies.map((job) => (
            <div
              key={job.id}
              className={`job-card ${selectedJob === job.id ? 'expanded' : ''}`}
            >
              <div className="job-main" onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}>
                <div className="job-icon" style={{ background: `${job.color}15`, color: job.color }}>
                  <i className={job.icon}></i>
                </div>

                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-department">{job.department}</p>
                </div>

                <div className="job-tags">
                  <span className="tag tag-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {job.location}
                  </span>
                  <span className="tag tag-salary">
                    <i className="fas fa-wallet"></i>
                    {job.salary}
                  </span>
                  <span className="tag tag-exp">
                    <i className="fas fa-briefcase"></i>
                    {job.experience}
                  </span>
                </div>

                <div className="job-deadline">
                  <span className={`days-left ${getDaysLeft(job.deadline) <= 7 ? 'urgent' : ''}`}>
                    {getDaysLeft(job.deadline)} kun
                  </span>
                </div>

                <button className="expand-btn">
                  <i className={`fas fa-chevron-${selectedJob === job.id ? 'up' : 'down'}`}></i>
                </button>
              </div>

              {selectedJob === job.id && (
                <div className="job-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4><i className="fas fa-clipboard-list"></i> Talablar</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4><i className="fas fa-tasks"></i> Vazifalar</h4>
                      <ul>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="job-actions">
                    <button className="btn-apply">
                      <i className="fas fa-paper-plane"></i>
                      Ariza yuborish
                    </button>
                    <button className="btn-share">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVacancies.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>Vakansiya topilmadi</h3>
            <p>Tanlangan filtr bo'yicha hozircha ochiq vakansiyalar yo'q</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="contact-cta">
          <div className="cta-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="cta-content">
            <h3>Mos vakansiya topmadingizmi?</h3>
            <p>Rezyumeni yuboring, yangi vakansiya ochilganda xabar beramiz</p>
          </div>
          <button className="cta-btn" onClick={() => setCurrentPage('aloqa')}>
            Bog'lanish
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vakansiya;
