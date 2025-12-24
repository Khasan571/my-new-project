import './News.css';

const News = ({ setCurrentPage }) => {
  const newsItems = [
    {
      id: 1,
      category: "Loyiha",
      date: "15 Dekabr, 2024",
      title: "Sun'iy intellekt asosida yangi ta'lim platformasi ishga tushirildi",
      description: "Markaz tomonidan ishlab chiqilgan AI-powered ta'lim platformasi 100 dan ortiq maktablarda sinovdan o'tkazilmoqda.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      category: "Hamkorlik",
      date: "10 Dekabr, 2024",
      title: "Xalqaro ta'lim tashkilotlari bilan memorandum imzolandi",
      description: "UNESCO va UNICEF bilan raqamli ta'lim sohasida hamkorlik to'g'risida kelishuv imzolandi.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      category: "Tadbir",
      date: "5 Dekabr, 2024",
      title: "EdTech Forum 2024 muvaffaqiyatli yakunlandi",
      description: "Forumda 50 dan ortiq mutaxassis ishtirok etdi va 20 ta innovatsion loyiha taqdim etildi.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      category: "E'lon",
      date: "1 Dekabr, 2024",
      title: "Yangi grant dasturi e'lon qilindi",
      description: "Ta'lim sohasidagi startaplar uchun 500 million so'mlik grant dasturi boshlandi.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-header">
          <span className="news-badge">Yangiliklar</span>
          <h2 className="news-title">
            So'nggi <span className="text-blue">yangiliklar</span>
          </h2>
          <p className="news-subtitle">
            Markaz faoliyati va ta'lim texnologiyalari sohasidagi eng so'nggi xabarlar
          </p>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-card-content">
                <span className="news-date">
                  <i className="far fa-calendar-alt"></i>
                  {item.date}
                </span>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-description">{item.description}</p>
                <a href="#" className="news-read-more">
                  Batafsil o'qish
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="news-footer">
          <button onClick={() => setCurrentPage('yangiliklar')} className="btn-view-all">
            Barcha yangiliklar
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
