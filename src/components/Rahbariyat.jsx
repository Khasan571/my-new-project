import { useState } from 'react';
import './Rahbariyat.css';

const Rahbariyat = ({ setCurrentPage }) => {
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);
  const director = {
    name: "Islomov Sardor Shavkatovich",
    position: "Direktor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    phone: "+998 71 123 45 67",
    email: "direktor@rttm.uz",
    reception: "Dushanba - Juma, 09:00 - 18:00",
    bio: "Axborot texnologiyalari sohasida 15 yildan ortiq tajribaga ega mutaxassis. Oliy ma'lumotli, texnika fanlari nomzodi.",
    responsibilities: [
      "\"Elektron ta'lim\" milliy tizimining ma'muri va boshqarish funksiyasini amalga oshirish",
      "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarida axborot-kommunikatsiya texnologiyalari, shu jumladan videokonferents-aloqa va masofadan o'qitish metodlaridan foydalangan holda o'quv jarayoni va ilmiy-tadqiqot ishlarini tashkil etish loyihalarini amalga oshirish",
      "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarining \"Elektron ta'lim\" milliy tizimi axborot-ta'lim resurslaridan erkin foydalanishini ta'minlash",
      "Oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarida tashkil etiladigan va \"Elektron ta'lim\" milliy tizimiga kiritiladigan elektron metodik komplekslar va boshqa ta'lim resurslariga yagona talablarni ishlab chiqish",
      "Oliy va o'rta maxsus, kasb-hunar ta'limi kadrlarining malakasini oshirish va ularni qayta tayyorlash muassasalari pedagogları uchun o'quv jarayonida axborot-kommunikatsiya texnologiyalaridan foydalanish bo'yicha maxsus o'quv kurslarini ishlab chiqish va amalga oshirish",
      "Ta'lim jarayonida kompyuter uskunalaridan foydalanishning samaradorligini tahlil qilish va monitoring olib borish, oliy va o'rta-maxsus, kasb-hunar ta'limi muassasalarining kompyuter va kommunikatsiya vositalarini yangilash bo'yicha tavsiyalar ishlab chiqish"
    ],
    achievements: [
      { icon: "fas fa-award", title: "15+", subtitle: "Yillik tajriba" },
      { icon: "fas fa-project-diagram", title: "50+", subtitle: "Loyihalar" },
      { icon: "fas fa-handshake", title: "30+", subtitle: "Hamkorliklar" },
      { icon: "fas fa-users", title: "200+", subtitle: "Jamoa a'zolari" }
    ]
  };

  return (
    <section className="rahbariyat" id="rahbariyat">
      <div className="rahbariyat-bg"></div>
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="rahbariyat-header">
          <h1 className="rahbariyat-title">
            Markaz rahbariyati
          </h1>
          <p className="rahbariyat-subtitle">
            Raqamli ta'lim texnologiyalarini rivojlantirish markazi rahbarlari
          </p>
        </div>

        {/* Director Card */}
        <div className="director-section">
          <div className="director-card">
            <div className="director-image-wrapper">
              <div className="director-image">
                <img src={director.image} alt={director.name} />
              </div>
            </div>

            <div className="director-info">
              <div className="director-header">
                <span className="director-position">{director.position}</span>
                <h2 className="director-name">{director.name}</h2>
                <p className="director-bio">{director.bio}</p>
                <div className="director-buttons">
                  <button className="bio-button" onClick={() => setShowBioModal(true)}>
                    <i className="fas fa-user-tie"></i>
                    <span>Biografiya</span>
                  </button>
                </div>
              </div>

              <div className="director-contacts">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Telefon</span>
                    <span className="contact-value">{director.phone}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{director.email}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Qabul vaqti</span>
                    <span className="contact-value">{director.reception}</span>
                  </div>
                </div>
              </div>

              <div className="director-achievements">
                {director.achievements.map((item, index) => (
                  <div key={index} className="achievement-item">
                    <i className={item.icon}></i>
                    <span className="achievement-title">{item.title}</span>
                    <span className="achievement-subtitle">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="responsibilities-card">
            <div className="responsibilities-header">
              <div className="responsibilities-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Asosiy vazifalari</h3>
            </div>
            <ul className="responsibilities-list">
              {(showAllResponsibilities
                ? director.responsibilities
                : director.responsibilities.slice(0, 3)
              ).map((item, index) => (
                <li key={index}>
                  <span className="responsibility-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="responsibility-text">{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="show-more-btn"
              onClick={() => setShowAllResponsibilities(!showAllResponsibilities)}
            >
              <span>{showAllResponsibilities ? "Yopish" : "Barchasini ko'rish"}</span>
              <i className={`fas fa-chevron-down ${showAllResponsibilities ? 'rotate' : ''}`}></i>
            </button>
          </div>
        </div>

      </div>

      {/* Biography Modal */}
      {showBioModal && (
        <div className="bio-modal-overlay" onClick={() => setShowBioModal(false)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowBioModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <div className="modal-image">
                <img src={director.image} alt={director.name} />
              </div>
              <div className="modal-title">
                <span className="modal-position">{director.position}</span>
                <h2>{director.name}</h2>
              </div>
            </div>
            <div className="modal-content">
              <h3><i className="fas fa-user-graduate"></i> Biografiya</h3>
              <p>{director.bio}</p>

              <h3><i className="fas fa-briefcase"></i> Ish tajribasi</h3>
              <ul className="bio-list">
                <li>2020 - hozirgacha: Raqamli ta'lim texnologiyalarini rivojlantirish markazi direktori</li>
                <li>2015 - 2020: Axborot texnologiyalari bo'limi boshlig'i</li>
                <li>2010 - 2015: Katta dasturchi</li>
              </ul>

              <h3><i className="fas fa-graduation-cap"></i> Ma'lumoti</h3>
              <ul className="bio-list">
                <li>Texnika fanlari nomzodi (PhD)</li>
                <li>Toshkent Axborot Texnologiyalari Universiteti - Magistr</li>
                <li>Toshkent Axborot Texnologiyalari Universiteti - Bakalavr</li>
              </ul>

              <h3><i className="fas fa-award"></i> Mukofotlar</h3>
              <ul className="bio-list">
                <li>O'zbekiston Respublikasi "Shuhrat" medali (2023)</li>
                <li>"Yilning eng yaxshi IT rahbari" nominatsiyasi (2022)</li>
                <li>Xalq ta'limi a'lochisi (2021)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rahbariyat;
