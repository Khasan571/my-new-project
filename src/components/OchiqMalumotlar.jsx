import './OchiqMalumotlar.css';

const OchiqMalumotlar = ({ setCurrentPage }) => {
  const reports = [
    {
      id: 1,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazi xodimlarining 2022-yil 1-2-3 choraklari bo'yicha xizmat safarlari uchun sarflangan mablag'lar to'g'risida ma'lumot",
      date: "October 18, 2022",
      category: "Xizmat safarlari"
    },
    {
      id: 2,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazi tasarrufidagi xizmat avtomototransport vositalari, xizmat uylari va boshqa ko'chmas mulk obyektlari to'g'risida MA'LUMOT",
      date: "October 18, 2022",
      category: "Mol-mulk"
    },
    {
      id: 3,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022-yil 1-2-3-choragida davlat xaridlari to'g'risidagi ma'lumotlari, shu jumladan to'g'ridan-to'g'ri shartnomalar bo'yicha xarid qilingan tovarlar (ishlar, xizmatlar)",
      date: "October 18, 2022",
      category: "Davlat xaridlari"
    },
    {
      id: 4,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazi xodimlarining 2022-yil 1-2-choragida xizmat safarlari uchun sarflangan mablag'lar to'g'risida ma'lumot",
      date: "July 15, 2022",
      category: "Xizmat safarlari"
    },
    {
      id: 5,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022 yil 2-choragida davlat xaridlari to'g'risidagi ma'lumotlari, shu jumladan to'g'ridan-to'g'ri shartnomalar bo'yicha xarid qilingan tovarlar (ishlar, xizmatlar)",
      date: "July 15, 2022",
      category: "Davlat xaridlari"
    },
    {
      id: 6,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022-yil I yarim yillik tasdiqlangan ish rejasi",
      date: "April 01, 2022",
      category: "Ish rejasi"
    },
    {
      id: 7,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazi tasarrufidagi xizmat avtomototransport vositalari, xizmat uylari, va boshqa ko'chmas mulk obyektlari to'g'risida",
      date: "July 15, 2022",
      category: "Mol-mulk"
    },
    {
      id: 8,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazi xodimlarining 2022-yil 1-choragida xizmat safarlari uchun sarflangan mablag'lar to'g'risida ma'lumot",
      date: "April 01, 2022",
      category: "Xizmat safarlari"
    },
    {
      id: 9,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022 yil 1-choragida davlat xaridlari to'g'risidagi ma'lumotlari, shu jumladan to'g'ridan-to'g'ri shartnomalar bo'yicha xarid qilingan tovarlar (ishlar, xizmatlar)",
      date: "April 01, 2022",
      category: "Davlat xaridlari"
    },
    {
      id: 10,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022-yil uchun daromadlar va xarajatlar smetasi",
      date: "April 01, 2022",
      category: "Smeta"
    },
    {
      id: 11,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2022-yil uchun daromadlar va xarajatlar smetasi",
      date: "July 15, 2022",
      category: "Smeta"
    },
    {
      id: 12,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazi tasarrufidagi xizmat avtomototransport vositalari, xizmat uylari, va boshqa ko'chmas mulk obyektlari to'g'risida",
      date: "January 10, 2022",
      category: "Mol-mulk"
    },
    {
      id: 13,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2021-yil I yarim yillik tasdiqlangan ish rejasi",
      date: "January 03, 2022",
      category: "Ish rejasi"
    },
    {
      id: 14,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2021-yil II yarim yillik tasdiqlangan ish rejasi",
      date: "January 03, 2022",
      category: "Ish rejasi"
    },
    {
      id: 15,
      title: "Mansabdor shaxslarning xizmat safarlari va xorijdan tashrif buyurgan mehmonlarni kutib olish xarajatlari",
      date: "January 07, 2022",
      category: "Xizmat safarlari"
    },
    {
      id: 16,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazi balansidagi avtotransport",
      date: "January 07, 2022",
      category: "Mol-mulk"
    },
    {
      id: 17,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining davlat xaridlari to'g'risidagi ma'lumotlari, shu jumladan to'g'ridan-to'g'ri shartnomalar bo'yicha xarid qilingan tovarlar (ishlar, xizmatlar)",
      date: "January 07, 2022",
      category: "Davlat xaridlari"
    },
    {
      id: 18,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazining 2021-yil uchun daromadlar va xarajatlar smetasi",
      date: "January 06, 2022",
      category: "Smeta"
    },
    {
      id: 19,
      title: "Ta'lim muassasalarida elektron ta'limni joriy etish markazi tomonidan tovarlarni (ishlarni, xizmatlarni) davlat xaridlarida uzluksizlikni ta'minlash maqsadida tanlov komissiyasi tarkibi",
      date: "January 07, 2022",
      category: "Davlat xaridlari"
    },
    {
      id: 20,
      title: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ta'lim muassasalarida elektron ta'limni joriy etish markazi mablag'larining ishlatilishi bo'yicha hisobotlar",
      date: "January 01, 2022",
      category: "Moliyaviy hisobot"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Xizmat safarlari": "#3b82f6",
      "Mol-mulk": "#8b5cf6",
      "Davlat xaridlari": "#10b981",
      "Ish rejasi": "#f59e0b",
      "Smeta": "#ec4899",
      "Moliyaviy hisobot": "#06b6d4"
    };
    return colors[category] || "#64748b";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Xizmat safarlari": "fas fa-plane",
      "Mol-mulk": "fas fa-building",
      "Davlat xaridlari": "fas fa-shopping-cart",
      "Ish rejasi": "fas fa-clipboard-list",
      "Smeta": "fas fa-calculator",
      "Moliyaviy hisobot": "fas fa-chart-pie"
    };
    return icons[category] || "fas fa-file-alt";
  };

  return (
    <section className="ochiq-malumotlar-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="ochiq-header">
          <div className="header-icon">
            <i className="fas fa-folder-open"></i>
          </div>
          <h1>Ochiq ma'lumotlar</h1>
          <p>Markaz faoliyati bo'yicha ochiq ma'lumotlar va hujjatlar</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{reports.length}</span>
              <span className="stat-label">Jami hujjatlar</span>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="reports-list">
          {reports.map((report, index) => (
            <div key={report.id} className="report-card">
              <div className="report-index">{String(index + 1).padStart(2, '0')}</div>

              <div className="report-icon" style={{ background: getCategoryColor(report.category) }}>
                <i className={getCategoryIcon(report.category)}></i>
              </div>

              <div className="report-content">
                <div className="report-category" style={{ color: getCategoryColor(report.category) }}>
                  {report.category}
                </div>
                <h3 className="report-title">{report.title}</h3>
                <div className="report-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{report.date} holatiga</span>
                </div>
              </div>

              <div className="report-actions">
                <button className="btn-view">
                  <i className="fas fa-eye"></i>
                  <span>Ko'rish</span>
                </button>
                <button className="btn-download">
                  <i className="fas fa-download"></i>
                  <span>Yuklab olish</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OchiqMalumotlar;
