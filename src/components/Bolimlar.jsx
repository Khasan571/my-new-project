import { useState } from 'react';
import './Bolimlar.css';

const Bolimlar = ({ setCurrentPage }) => {
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = [
    {
      id: 1,
      name: "Korporativ tarmoqni boshqarish va axborot xavfsizligi bo'limi",
      head: "Karimov Jasur Bahodirovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 68",
      email: "security@rttm.uz",
      staff: [
        { name: "Aliyev Sardor Tohirovich", position: "Yetakchi mutaxassis", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
        { name: "Mahmudov Bekzod Anvarovich", position: "Tarmoq muhandisi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
        { name: "Qodirov Jamshid Alisher o'g'li", position: "Axborot xavfsizligi mutaxassisi", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
        { name: "Tursunov Aziz Bahodirovich", position: "Tizim administratori", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Korporativ tarmoq infratuzilmasini loyihalashtirish va boshqarish",
        "Axborot xavfsizligi siyosatini ishlab chiqish va amalga oshirish",
        "Kiberhujumlardan himoya qilish va monitoring olib borish"
      ]
    },
    {
      id: 2,
      name: "Axborot tizimlarini texnik qo'llab-quvvatlash va tahlil qilish bo'limi",
      head: "Rahimov Sardor Akmalovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 69",
      email: "support@rttm.uz",
      staff: [
        { name: "Ergashev Dilshod Karimovich", position: "Texnik mutaxassis", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
        { name: "Saidov Nodir Rustamovich", position: "Tahlilchi", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
        { name: "Xolmatov Shoxrux Botirovich", position: "Texnik yordam mutaxassisi", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Foydalanuvchilarga texnik yordam ko'rsatish",
        "Tizim samaradorligini tahlil qilish va hisobotlar tayyorlash",
        "Muammolarni aniqlash va bartaraf etish"
      ]
    },
    {
      id: 3,
      name: "Axborot tizimlarini loyihalashtirish va ishlab chiqish bo'limi",
      head: "Toshmatov Bobur Rustamovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 70",
      email: "dev@rttm.uz",
      staff: [
        { name: "Nazarov Otabek Shuxratovich", position: "Senior dasturchi", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
        { name: "Umarov Farrux Toxirovich", position: "Frontend dasturchi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
        { name: "Xasanov Azizbek Anvarovich", position: "Backend dasturchi", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
        { name: "Rahmonov Javohir Ulugbek o'g'li", position: "Mobile dasturchi", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
        { name: "Karimova Madina Bahodirovna", position: "UI/UX dizayner", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Yangi axborot tizimlarini loyihalashtirish",
        "Dasturiy ta'minot ishlab chiqish va sinovdan o'tkazish",
        "Texnik hujjatlarni tayyorlash"
      ]
    },
    {
      id: 4,
      name: "Axborot tizimlarini joriy etish va rivojlantirish bo'limi",
      head: "Abdullayev Sherzod Karimovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 71",
      email: "implementation@rttm.uz",
      staff: [
        { name: "Mirzayev Sanjar Akmalovich", position: "Joriy etish mutaxassisi", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
        { name: "Yusupov Doston Erkinovich", position: "Integratsiya muhandisi", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
        { name: "Salimov Bexzod Toxirovich", position: "DevOps muhandisi", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Tayyor tizimlarni joriy etish va sozlash",
        "Mavjud tizimlarni yangilash va optimallashtirish",
        "Boshqa tizimlar bilan integratsiya"
      ]
    },
    {
      id: 5,
      name: "Buxgalteriya",
      head: "Rahimova Nilufar Akmalovna",
      headPosition: "Bosh hisobchi",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 72",
      email: "finance@rttm.uz",
      staff: [
        { name: "Qosimova Dilnoza Rashidovna", position: "Hisobchi", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
        { name: "Sodiqova Maftuna Karimovna", position: "Hisobchi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Buxgalteriya hisobini yuritish",
        "Moliyaviy hisobotlarni tayyorlash",
        "Soliq hisobotlarini taqdim etish"
      ]
    },
    {
      id: 6,
      name: "Interaktiv davlat xizmatlarni joriy etish bo'limi",
      head: "Nazarov Akmal Olimovich",
      headPosition: "Bo'lim boshlig'i",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=350&fit=crop",
      phone: "+998 71 123 45 73",
      email: "gov-services@rttm.uz",
      staff: [
        { name: "Zokirov Abbos Toxirovich", position: "Loyiha menejeri", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
        { name: "Tojiboyev Shoxjaxon Bahodirovich", position: "Xizmatlar mutaxassisi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
        { name: "Ismoilova Sevara Rustamovna", position: "Koordinator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" }
      ],
      tasks: [
        "Davlat xizmatlarini raqamlashtirish",
        "Elektron hukumat loyihalarini amalga oshirish",
        "Foydalanuvchilar bilan ishlash va qo'llab-quvvatlash"
      ]
    }
  ];

  const totalEmployees = departments.reduce((sum, dept) => sum + dept.staff.length + 1, 0);

  return (
    <section className="bolimlar-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="bolimlar-header">
          <h1 className="bolimlar-title">Bo'limlar</h1>
          <p className="bolimlar-subtitle">
            Markaz tarkibiy bo'limlari va ularning vazifalari
          </p>
          <div className="bolimlar-stats">
            <div className="stat-item">
              <span className="stat-number">{departments.length}</span>
              <span className="stat-text">bo'lim</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{totalEmployees}+</span>
              <span className="stat-text">xodim</span>
            </div>
          </div>
        </div>

        {/* Departments List */}
        <div className="bolimlar-list">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className={`bolim-item ${selectedDept === dept.id ? 'active' : ''}`}
            >
              <div
                className="bolim-header"
                onClick={() => setSelectedDept(selectedDept === dept.id ? null : dept.id)}
              >
                <div className="bolim-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="bolim-info">
                  <h3>{dept.name}</h3>
                  <span className="bolim-meta">{dept.staff.length + 1} xodim</span>
                </div>
                <button className="bolim-expand">
                  <i className={`fas ${selectedDept === dept.id ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
              </div>

              {selectedDept === dept.id && (
                <div className="bolim-content">
                  <div className="bolim-leader">
                    <img src={dept.image} alt={dept.head} />
                    <div className="leader-info">
                      <span className="leader-position">{dept.headPosition}</span>
                      <h4>{dept.head}</h4>
                      <div className="leader-contacts">
                        <a href={`tel:${dept.phone}`}>
                          <i className="fas fa-phone-alt"></i>
                          {dept.phone}
                        </a>
                        <a href={`mailto:${dept.email}`}>
                          <i className="fas fa-envelope"></i>
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bolim-staff">
                    <h5>Xodimlar</h5>
                    <div className="staff-grid">
                      {dept.staff.map((member, idx) => (
                        <div key={idx} className="staff-member">
                          <img src={member.image} alt={member.name} />
                          <div className="staff-info">
                            <span className="staff-name">{member.name}</span>
                            <span className="staff-position">{member.position}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bolim-tasks">
                    <h5>Asosiy vazifalar</h5>
                    <ul>
                      {dept.tasks.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bolimlar;
