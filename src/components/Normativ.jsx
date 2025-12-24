import './Normativ.css';

const Normativ = ({ setCurrentPage }) => {
  const documents = [
    {
      id: 1,
      title: "O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirining \"Oliy va o'rta maxsus, professional ta'lim tashkilotlarida o'qitishning to'lov-kontrakt shakli va undan tushgan mablag'larni taqsimlash tartibi to'g'risidagi nizomga o'zgartirishlar kiritish haqida\"",
      number: "2431-5 buyrug'i",
      date: "21.11.2025",
      type: "buyruq"
    },
    {
      id: 2,
      title: "O'zbekiston Respublikasi Vazirlar Mahkamasining \"Raqamli texnologiyalar sohasida mutaxassislarni tayyorlash tizimini yo'lga qo'yish hamda chet ellik mutaxassislarga \"IT-visa\" berish tartibi takomillashtirilishi munosabati bilan O'zbekiston Respublikasi Hukumatining ayrim qarorlariga o'zgartirish va qo'shimchalar kiritish to'g'risida\"",
      number: "734-son qarori",
      date: "21.11.2025",
      type: "qaror"
    },
    {
      id: 3,
      title: "O'zbekiston Respublikasi Prezidentining \"Toshkent shahrida ekologik vaziyatni yaxshilash bo'yicha kechiktirib bo'lmaydigan chora-tadbirlar to'g'risida\"",
      number: "PF-229-son Farmoni",
      date: "24.11.2025",
      type: "farmon"
    },
    {
      id: 4,
      title: "O'zbekiston Respublikasi Prezidentining \"Arxiv ishi sohasini raqamlashtirish va sohada boshqaruv samaradorligini yanada oshirish chora-tadbirlari to'g'risida\"",
      number: "PF-228-son Farmoni",
      date: "24.11.2025",
      type: "farmon"
    },
    {
      id: 5,
      title: "O'zbekiston Respublikasi Vazirlar Mahkamasining \"Yangiyer shahar texnikumi faoliyatini tashkil etish to'g'risida\"gi",
      number: "692-son qarori",
      date: "04.11.2025",
      type: "qaror"
    },
    {
      id: 6,
      title: "O'zbekiston Respublikasi Vazirlar Mahkamasining \"2025-2026-yillarda mamlakatimizda qatag'on qurbonlari hayoti va faoliyatini targ'ib etish ishlarini yanada jadallashtirish bo'yicha chora-tadbirlar dasturini tasdiqlash to'g'risida\"gi",
      number: "691-son qarori",
      date: "04.11.2025",
      type: "qaror"
    },
    {
      id: 7,
      title: "O'zbekiston Respublikasining \"Oliy ta'limga oid malakalarni tan olish to'g'risidagi global konvensiyani (Parij, 2019-yil 25-noyabr) ratifikatsiya qilish haqida\"",
      number: "O'RQ-1094-son Qonuni",
      date: "11.11.2025",
      type: "qonun"
    },
    {
      id: 8,
      title: "O'zbekiston Respublikasining \"O'zbekiston Respublikasining ayrim qonun hujjatlariga o'zgartirish va qo'shimchalar kiritish to'g'risida\"",
      number: "O'RQ-1095-son Qonuni",
      date: "11.11.2025",
      type: "qonun"
    },
    {
      id: 9,
      title: "O'zbekiston Respublikasi Vazirlar Mahkamasining \"O'zbekiston Respublikasi Hukumatining ayrim qarorlariga qurulish sohasidagi normativ-huquqiy hujjatlarni takomillashtirishga qaratilgan o'zgartirish va qo'shimchalar kiritish to'g'risida\"",
      number: "666-son qarori",
      date: "22.10.2025",
      type: "qaror"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      "farmon": "#dc2626",
      "qaror": "#2563eb",
      "qonun": "#059669",
      "buyruq": "#7c3aed"
    };
    return colors[type] || "#64748b";
  };

  const getTypeLabel = (type) => {
    const labels = {
      "farmon": "Farmon",
      "qaror": "Qaror",
      "qonun": "Qonun",
      "buyruq": "Buyruq"
    };
    return labels[type] || type;
  };

  const getTypeIcon = (type) => {
    const icons = {
      "farmon": "fas fa-scroll",
      "qaror": "fas fa-gavel",
      "qonun": "fas fa-balance-scale",
      "buyruq": "fas fa-file-signature"
    };
    return icons[type] || "fas fa-file-alt";
  };

  return (
    <section className="normativ-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="normativ-header">
          <div className="header-icon">
            <i className="fas fa-balance-scale"></i>
          </div>
          <h1>Normativ huquqiy-hujjatlar</h1>
          <p>Markaz faoliyatiga oid qonun hujjatlari va me'yoriy aktlar</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{documents.length}</span>
              <span className="stat-label">Jami hujjatlar</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{documents.filter(d => d.type === 'farmon').length}</span>
              <span className="stat-label">Farmonlar</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{documents.filter(d => d.type === 'qaror').length}</span>
              <span className="stat-label">Qarorlar</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{documents.filter(d => d.type === 'qonun').length}</span>
              <span className="stat-label">Qonunlar</span>
            </div>
          </div>
        </div>

        {/* Documents Table */}
        <div className="documents-table-wrapper">
          <table className="documents-table">
            <thead>
              <tr>
                <th className="th-number">№</th>
                <th className="th-name">Nomi</th>
                <th className="th-action">Yuklab olish</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="td-number">{doc.id}</td>
                  <td className="td-name">
                    <div className="doc-info">
                      <span className="doc-type-badge" style={{ background: getTypeColor(doc.type) }}>
                        <i className={getTypeIcon(doc.type)}></i>
                        {getTypeLabel(doc.type)}
                      </span>
                      <p className="doc-title">{doc.title}</p>
                      <div className="doc-meta">
                        <span className="doc-date">
                          <i className="fas fa-calendar-alt"></i>
                          {doc.date}
                        </span>
                        <span className="doc-number">
                          <i className="fas fa-hashtag"></i>
                          {doc.number}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="td-action">
                    <button className="btn-download">
                      <i className="fas fa-download"></i>
                      <span>Yuklab olish</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="documents-legend">
          <span className="legend-title">Hujjat turlari:</span>
          <div className="legend-items">
            <span className="legend-item">
              <i className="fas fa-scroll" style={{ color: '#dc2626' }}></i>
              Farmon
            </span>
            <span className="legend-item">
              <i className="fas fa-gavel" style={{ color: '#2563eb' }}></i>
              Qaror
            </span>
            <span className="legend-item">
              <i className="fas fa-balance-scale" style={{ color: '#059669' }}></i>
              Qonun
            </span>
            <span className="legend-item">
              <i className="fas fa-file-signature" style={{ color: '#7c3aed' }}></i>
              Buyruq
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Normativ;
