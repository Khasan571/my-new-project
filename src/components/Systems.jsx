import './Systems.css';

const Systems = ({ setCurrentPage }) => {
  const systems = [
    { id: 1, name: "HEMIS", description: "Oliy ta'lim boshqaruv tizimi", icon: "fas fa-graduation-cap" },
    { id: 2, name: "EMIS", description: "Ta'lim boshqaruv axborot tizimi", icon: "fas fa-school" },
    { id: 3, name: "E-KUTUBXONA", description: "Elektron kutubxona tizimi", icon: "fas fa-book-open" },
    { id: 4, name: "ONLINE DARS", description: "Masofaviy ta'lim platformasi", icon: "fas fa-video" },
    { id: 5, name: "E-IMTIHON", description: "Elektron test va baholash", icon: "fas fa-clipboard-check" },
    { id: 6, name: "TALABA.UZ", description: "Talabalar uchun portal", icon: "fas fa-user-graduate" },
    { id: 7, name: "USTOZ.UZ", description: "O'qituvchilar portali", icon: "fas fa-chalkboard-teacher" },
    { id: 8, name: "MAKTAB.UZ", description: "Maktab boshqaruv tizimi", icon: "fas fa-building" },
    { id: 9, name: "E-JURNAL", description: "Elektron jurnal tizimi", icon: "fas fa-journal-whills" },
    { id: 10, name: "MALAKA", description: "Malaka oshirish tizimi", icon: "fas fa-certificate" },
  ];

  const topRow = [...systems, ...systems];
  const bottomRow = [...systems.slice().reverse(), ...systems.slice().reverse()];

  return (
    <section className="systems" id="services">
      <div className="systems-bg"></div>

      <div className="container">
        <div className="systems-header">
          <h2 className="systems-title">
            Axborot tizimlari
          </h2>
          <div className="systems-line"></div>
        </div>
      </div>

      <div className="systems-wrapper">
        {/* Top Row - moves left */}
        <div className="systems-row">
          <div className="systems-track track-left">
            {topRow.map((system, index) => (
              <a href="#" key={index} className="system-item">
                <div className="system-icon">
                  <i className={system.icon}></i>
                </div>
                <div className="system-info">
                  <span className="system-name">{system.name}</span>
                  <span className="system-desc">{system.description}</span>
                </div>
                <div className="system-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row - moves right */}
        <div className="systems-row">
          <div className="systems-track track-right">
            {bottomRow.map((system, index) => (
              <a href="#" key={index} className="system-item">
                <div className="system-icon">
                  <i className={system.icon}></i>
                </div>
                <div className="system-info">
                  <span className="system-name">{system.name}</span>
                  <span className="system-desc">{system.description}</span>
                </div>
                <div className="system-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="systems-cta">
          <p>Barcha tizimlarga kirish uchun yagona login</p>
          <button
            className="systems-btn"
            onClick={() => setCurrentPage && setCurrentPage('axborot-tizimlari')}
          >
            <span>Barcha axborot tizimlari</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Systems;
