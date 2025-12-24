import { useState } from 'react';
import './Sharhlar.css';

const Sharhlar = ({ setCurrentPage }) => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Aziza Karimova",
      position: "TDTU o'qituvchisi",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-12-15",
      text: "Elektron ta'lim tizimi juda qulay va samarali. O'quvchilar bilan muloqot qilish, topshiriqlar berish va baholash jarayoni ancha osonlashdi. Rahmat!",
      course: "Elektron ta'lim tizimi"
    },
    {
      id: 2,
      name: "Bobur Aliyev",
      position: "Talaba, TATU",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-12-10",
      text: "Masofaviy ta'lim platformasi orqali darslarni ko'rib, mustaqil o'rganish imkoniyati paydo bo'ldi. Video darslar sifati a'lo darajada!",
      course: "Masofaviy ta'lim"
    },
    {
      id: 3,
      name: "Malika Rahimova",
      position: "Maktab direktori",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-12-08",
      text: "Maktabimizda raqamli ta'lim texnologiyalarini joriy qilishda markaz xodimlari katta yordam berdi. Professional yondashuv uchun minnatdormiz.",
      course: "Konsalting xizmati"
    },
    {
      id: 4,
      name: "Sardor Mahmudov",
      position: "IT mutaxassisi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-12-05",
      text: "Malaka oshirish kurslarida ishtirok etdim. Zamonaviy texnologiyalar haqida ko'p yangi bilimlar oldim. Kurslar juda foydali bo'ldi.",
      course: "Malaka oshirish kurslari"
    },
    {
      id: 5,
      name: "Nilufar Tosheva",
      position: "Professor, SamDU",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-11-28",
      text: "Ilmiy tadqiqot ishlarimiz uchun platformadan foydalanmoqdamiz. Ma'lumotlarni saqlash va tahlil qilish imkoniyatlari juda keng.",
      course: "Ilmiy platforma"
    },
    {
      id: 6,
      name: "Jasur Qodirov",
      position: "Texnik yordam bo'limi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-11-25",
      text: "Markaz bilan hamkorlik qilish juda yoqimli. Har qanday muammoni tezda hal qilishadi. Texnik qo'llab-quvvatlash a'lo darajada!",
      course: "Texnik yordam"
    },
    {
      id: 7,
      name: "Gulnora Saidova",
      position: "O'qituvchi, 15-maktab",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      rating: 4,
      date: "2024-11-20",
      text: "Interaktiv darslik yaratish bo'yicha treningda qatnashdim. Juda foydali tajriba bo'ldi, endi o'z darsliklarimni yarata olaman.",
      course: "Trening dasturlari"
    },
    {
      id: 8,
      name: "Temur Yusupov",
      position: "Magistrant",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5,
      date: "2024-11-15",
      text: "Dissertatsiya ishi uchun kerakli materiallarni platformadan topdim. Kutubxona resurslari juda boy va qulay tashkil etilgan.",
      course: "Elektron kutubxona"
    }
  ];

  const stats = {
    total: reviews.length,
    average: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
    fiveStars: reviews.filter(r => r.rating === 5).length,
    fourStars: reviews.filter(r => r.rating === 4).length,
    threeStars: reviews.filter(r => r.rating === 3).length
  };

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(r => r.rating === parseInt(filter));

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="sharhlar" id="sharhlar">
      <div className="sharhlar-bg"></div>
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="sharhlar-header">
          <h1 className="sharhlar-title">Foydalanuvchilar sharhlari</h1>
          <p className="sharhlar-subtitle">
            Markaz xizmatlari haqida foydalanuvchilar fikrlari
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-main">
            <div className="stats-rating">
              <span className="stats-number">{stats.average}</span>
              <div className="stats-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="stats-total">{stats.total} ta sharh asosida</span>
            </div>
          </div>
          <div className="stats-breakdown">
            <div className="stats-bar">
              <span className="bar-label">5 yulduz</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(stats.fiveStars / stats.total) * 100}%` }}></div>
              </div>
              <span className="bar-count">{stats.fiveStars}</span>
            </div>
            <div className="stats-bar">
              <span className="bar-label">4 yulduz</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(stats.fourStars / stats.total) * 100}%` }}></div>
              </div>
              <span className="bar-count">{stats.fourStars}</span>
            </div>
            <div className="stats-bar">
              <span className="bar-label">3 yulduz</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(stats.threeStars / stats.total) * 100}%` }}></div>
              </div>
              <span className="bar-count">{stats.threeStars}</span>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <span className="filter-label">Saralash:</span>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Barchasi
            </button>
            <button
              className={`filter-btn ${filter === '5' ? 'active' : ''}`}
              onClick={() => setFilter('5')}
            >
              <i className="fas fa-star"></i> 5
            </button>
            <button
              className={`filter-btn ${filter === '4' ? 'active' : ''}`}
              onClick={() => setFilter('4')}
            >
              <i className="fas fa-star"></i> 4
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="review-user">
                  <h4 className="review-name">{review.name}</h4>
                  <span className="review-position">{review.position}</span>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-footer">
                <span className="review-course">
                  <i className="fas fa-bookmark"></i>
                  {review.course}
                </span>
                <span className="review-date">
                  <i className="fas fa-calendar-alt"></i>
                  {formatDate(review.date)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sharhlar;
