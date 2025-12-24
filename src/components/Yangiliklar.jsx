import { useState } from 'react';
import './Yangiliklar.css';

const Yangiliklar = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      category: "loyiha",
      categoryLabel: "Loyiha",
      date: "20 Dek",
      year: "2024",
      title: "Sun'iy intellekt asosida yangi ta'lim platformasi ishga tushirildi",
      description: "Markaz tomonidan ishlab chiqilgan AI-powered ta'lim platformasi 100 dan ortiq maktablarda sinovdan o'tkazilmoqda.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      category: "hamkorlik",
      categoryLabel: "Hamkorlik",
      date: "18 Dek",
      year: "2024",
      title: "Xalqaro ta'lim tashkilotlari bilan memorandum imzolandi",
      description: "UNESCO va UNICEF bilan raqamli ta'lim sohasida hamkorlik to'g'risida kelishuv imzolandi.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      category: "tadbir",
      categoryLabel: "Tadbir",
      date: "15 Dek",
      year: "2024",
      title: "EdTech Forum 2024 muvaffaqiyatli yakunlandi",
      description: "Forumda 50 dan ortiq mutaxassis ishtirok etdi va 20 ta innovatsion loyiha taqdim etildi.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      category: "elon",
      categoryLabel: "E'lon",
      date: "12 Dek",
      year: "2024",
      title: "Yangi grant dasturi e'lon qilindi",
      description: "Ta'lim sohasidagi startaplar uchun 500 million so'mlik grant dasturi boshlandi.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      category: "loyiha",
      categoryLabel: "Loyiha",
      date: "10 Dek",
      year: "2024",
      title: "Viloyatlarda IT markazlari ochildi",
      description: "Respublikaning 5 ta viloyatida zamonaviy IT ta'lim markazlari ochildi.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      category: "hamkorlik",
      categoryLabel: "Hamkorlik",
      date: "8 Dek",
      year: "2024",
      title: "Google bilan hamkorlik memorandumi imzolandi",
      description: "Google kompaniyasi bilan ta'lim sohasida hamkorlik to'g'risida memorandum imzolandi.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      category: "tadbir",
      categoryLabel: "Tadbir",
      date: "5 Dek",
      year: "2024",
      title: "O'qituvchilar uchun hackathon bo'lib o'tdi",
      description: "Respublika miqyosidagi hackathonda 200 dan ortiq o'qituvchi ishtirok etdi.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    },
    {
      id: 8,
      category: "elon",
      categoryLabel: "E'lon",
      date: "1 Dek",
      year: "2024",
      title: "Yangi o'quv kurslari e'lon qilindi",
      description: "2025-yil uchun yangi o'quv kurslari ro'yxati e'lon qilindi.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    },
  ];

  const categories = [
    { id: 'all', label: 'Barchasi', icon: 'fas fa-th-large' },
    { id: 'loyiha', label: 'Loyihalar', icon: 'fas fa-project-diagram' },
    { id: 'hamkorlik', label: 'Hamkorlik', icon: 'fas fa-handshake' },
    { id: 'tadbir', label: 'Tadbirlar', icon: 'fas fa-calendar-check' },
    { id: 'elon', label: "E'lonlar", icon: 'fas fa-bullhorn' },
  ];

  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);

  const mainNews = filteredNews[0];
  const sideNews = filteredNews.slice(1, 3);
  const gridNews = filteredNews.slice(3);

  return (
    <section className="yangiliklar-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="yangiliklar-header">
          <h1>So'nggi yangiliklar va <span>e'lonlar</span></h1>
        </div>

        {/* Categories */}
        <div className="categories-nav">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={cat.icon}></i>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Main Section */}
        {filteredNews.length > 0 && (
          <div className="news-main-section">
            {/* Main News */}
            {mainNews && (
              <article className="main-news">
                <div className="main-news-image">
                  <img src={mainNews.image} alt={mainNews.title} />
                  <div className="main-news-overlay"></div>
                  <div className="main-news-date">
                    <span className="date-day">{mainNews.date.split(' ')[0]}</span>
                    <span className="date-month">{mainNews.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="main-news-content">
                  <span className="news-tag">{mainNews.categoryLabel}</span>
                  <h2>{mainNews.title}</h2>
                  <p>{mainNews.description}</p>
                  <button className="read-more-btn">
                    <span>O'qish</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </article>
            )}

            {/* Side News */}
            <div className="side-news">
              {sideNews.map(item => (
                <article key={item.id} className="side-news-item">
                  <div className="side-news-image">
                    <img src={item.image} alt={item.title} />
                    <span className="side-news-tag">{item.categoryLabel}</span>
                  </div>
                  <div className="side-news-content">
                    <span className="side-news-date">
                      <i className="far fa-clock"></i>
                      {item.date}, {item.year}
                    </span>
                    <h3>{item.title}</h3>
                    <button className="side-read-btn">
                      Batafsil <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Grid Section */}
        {gridNews.length > 0 && (
          <>
            <div className="section-divider">
              <span>Barcha yangiliklar</span>
            </div>

            <div className="news-grid">
              {gridNews.map((item, index) => (
                <article key={item.id} className="grid-news-item">
                  <div className="grid-news-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="grid-news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="grid-news-content">
                    <div className="grid-news-meta">
                      <span className="grid-tag">{item.categoryLabel}</span>
                      <span className="grid-date">{item.date}, {item.year}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <button className="grid-arrow-btn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Load More */}
        <div className="news-load-more">
          <button className="load-more-btn">
            <span>Ko'proq ko'rish</span>
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Yangiliklar;
