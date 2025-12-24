import { useState } from 'react';
import './MarkazVazifalari.css';

const MarkazVazifalari = ({ setCurrentPage }) => {
  const [activeTask, setActiveTask] = useState(null);

  const tasks = [
    {
      id: 1,
      icon: "fas fa-cogs",
      title: "Elektron ta'lim tizimini boshqarish",
      description: "\"Elektron ta'lim\" milliy tizimining ma'muri va boshqarish funksiyasini amalga oshirish",
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: "fas fa-video",
      title: "Axborot-kommunikatsiya texnologiyalari",
      description: "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarida axborot-kommunikatsiya texnologiyalari, shu jumladan videokonferents-aloqa va masofadan o'qitish metodlaridan foydalangan holda o'quv jarayoni va ilmiy-tadqiqot ishlarini tashkil etish loyihalarini amalga oshirish",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: "fas fa-unlock-alt",
      title: "Ta'lim resurslaridan foydalanish",
      description: "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarining \"Elektron ta'lim\" milliy tizimi axborot-ta'lim resurslaridan erkin foydalanishini ta'minlash",
      color: "#06b6d4"
    },
    {
      id: 4,
      icon: "fas fa-book-open",
      title: "Elektron metodik komplekslar",
      description: "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarida tashkil etiladigan va \"Elektron ta'lim\" milliy tizimiga kiritiladigan elektron metodik komplekslar va boshqa ta'lim resurslariga yagona talablarni ishlab chiqish",
      color: "#10b981"
    },
    {
      id: 5,
      icon: "fas fa-chalkboard-teacher",
      title: "Kadrlar malakasini oshirish",
      description: "Oliy va o'rta maxsus, kasb-hunar ta'limi kadrlarining malakasini oshirish va ularni qayta tayyorlash muassasalari pedagogları uchun o'quv jarayonida axborot-kommunikatsiya texnologiyalaridan foydalanish bo'yicha maxsus o'quv kurslarini ishlab chiqish va amalga oshirish",
      color: "#f59e0b"
    },
    {
      id: 6,
      icon: "fas fa-chart-line",
      title: "Monitoring va tahlil",
      description: "Ta'lim jarayonida kompyuter uskunalaridan foydalanishning samaradorligini tahlil qilish va monitoring olib borish, oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarining kompyuter va kommunikatsiya vositalarini yangilash bo'yicha tavsiyalar ishlab chiqish",
      color: "#ef4444"
    }
  ];

  const stats = [
    { icon: "fas fa-tasks", value: "6", label: "Asosiy vazifalar" },
    { icon: "fas fa-university", value: "100+", label: "Ta'lim muassasalari" },
    { icon: "fas fa-users-cog", value: "500+", label: "Malaka oshirgan kadrlar" },
    { icon: "fas fa-project-diagram", value: "50+", label: "Loyihalar" }
  ];

  return (
    <section className="markaz-vazifalari">
      <div className="vazifalari-bg"></div>
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="vazifalari-header">
          <span className="vazifalari-badge">Faoliyat</span>
          <h1 className="vazifalari-title">
            Markaz <span className="text-gradient">vazifalari</span>
          </h1>
          <p className="vazifalari-subtitle">
            Raqamli ta'lim texnologiyalarini rivojlantirish markazining asosiy yo'nalishlari va vazifalari
          </p>
        </div>

        {/* Stats */}
        <div className="vazifalari-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="tasks-section">
          <div className="section-header">
            <h2><i className="fas fa-bullseye"></i> Asosiy vazifalar</h2>
            <p>Markaz faoliyatining asosiy yo'nalishlari</p>
          </div>

          <div className="tasks-grid">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`task-card ${activeTask === task.id ? 'active' : ''}`}
                onClick={() => setActiveTask(activeTask === task.id ? null : task.id)}
                style={{ '--card-color': task.color }}
              >
                <div className="task-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="task-icon">
                  <i className={task.icon}></i>
                </div>
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <div className="task-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="mission-content">
              <h3>Bizning missiyamiz</h3>
              <p>
                O'zbekiston Respublikasida zamonaviy axborot-kommunikatsiya texnologiyalari asosida
                ta'lim tizimini rivojlantirish, elektron ta'lim resurslarini yaratish va joriy etish,
                hamda ta'lim sifatini oshirishga hissa qo'shish.
              </p>
            </div>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-eye"></i>
            </div>
            <div className="mission-content">
              <h3>Bizning ko'zlagan maqsadimiz</h3>
              <p>
                O'zbekistonni raqamli ta'lim sohasida mintaqaviy liderga aylantirish,
                har bir fuqaroga sifatli ta'lim olish imkoniyatini ta'minlash va
                zamonaviy kadrlarni tayyorlashda yetakchi markaz bo'lish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkazVazifalari;
