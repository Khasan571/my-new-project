import { useState } from 'react';
import './Savollar.css';

const Savollar = ({ setCurrentPage }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Bizning OTM yangi tashkil etilgan bo'lib, HEMIS tizimidan qanday foydalansak bo'ladi?",
      answer: "Yangi tashkil etilgan OTM HEMIS tizimidan foydalanish uchun quyidagi bosqichlarni amalga oshirish lozim: 1) Rasmiy ariza bilan Markazga murojaat qilish; 2) Tizimga kirish uchun login va parol olish; 3) OTM ma'lumotlarini tizimga kiritish; 4) Xodimlar va talabalar bazasini shakllantirish. Batafsil ma'lumot uchun info@hemis.uz elektron pochtasiga murojaat qilishingiz mumkin.",
      icon: "fas fa-university",
      color: "#3b82f6"
    },
    {
      id: 2,
      question: "HEMIS axborot tizimi bo'yicha Oliy ta'lim muassasasi xodimlarini malakasini oshirish kurslari mavjudmi?",
      answer: "Ha, HEMIS axborot tizimi bo'yicha OTM xodimlari uchun malaka oshirish kurslari muntazam ravishda tashkil etiladi. Kurslar onlayn va oflayn formatda o'tkaziladi. Kurs davomiyligi 3-5 kun bo'lib, ishtirokchilarga sertifikat beriladi. Kurslar bepul tashkil etiladi va ro'yxatdan o'tish hemis.uz saytida amalga oshiriladi.",
      icon: "fas fa-graduation-cap",
      color: "#10b981"
    },
    {
      id: 3,
      question: "HEMIS axborot tizimi bo'yicha OTM xodimlarini malakasini oshirish kurslari qanday tashkil qilinadi?",
      answer: "Malaka oshirish kurslari quyidagi tartibda tashkil etiladi: 1) OTM rasmiy ariza yuboradi; 2) Kurs sanasi va formati kelishiladi; 3) Ishtirokchilar ro'yxati tasdiqlanadi; 4) Onlayn yoki oflayn formatda darslar o'tkaziladi; 5) Yakuniy test topshiriladi; 6) Muvaffaqiyatli o'tganlarga sertifikat beriladi. Minimal guruh soni - 15 kishi.",
      icon: "fas fa-chalkboard-teacher",
      color: "#8b5cf6"
    },
    {
      id: 4,
      question: "Veb-portal yoki axborot tizimlari yaratish xizmatidan foydalanmoqchi edik. Narxlar bilan tanishsak bo'ladimi?",
      answer: "Veb-portal va axborot tizimlari yaratish xizmatlari narxi loyihaning murakkabligi va hajmiga qarab belgilanadi. Dastlabki konsultatsiya bepul. Narxlar bilan tanishish uchun +998 71 203-13-24 telefon raqamiga qo'ng'iroq qiling yoki etm@edu.uz elektron pochtasiga texnik topshiriq yuborishingiz mumkin. 3 ish kuni ichida tijoriy taklif tayyorlab beriladi.",
      icon: "fas fa-laptop-code",
      color: "#f59e0b"
    },
    {
      id: 5,
      question: "Edu.uz platformasida online kurslardan qanday foydalanish mumkin?",
      answer: "Edu.uz platformasidagi onlayn kurslardan foydalanish uchun: 1) edu.uz saytiga kirib ro'yxatdan o'ting; 2) O'zingizga kerakli kursni tanlang; 3) 'Kursga yozilish' tugmasini bosing; 4) Video darslarni ko'ring va topshiriqlarni bajaring; 5) Yakuniy testni topshirib sertifikat oling. Aksariyat kurslar bepul, ba'zilari pullik bo'lib, narxi kurs sahifasida ko'rsatilgan.",
      icon: "fas fa-play-circle",
      color: "#06b6d4"
    },
    {
      id: 6,
      question: "Texnik nosozlik yuz berganda qayerga murojaat qilish kerak?",
      answer: "Texnik nosozliklar yuz berganda quyidagi usullar orqali murojaat qilishingiz mumkin: 1) Telegram: @hemis_support_bot; 2) Telefon: +998 71 203-13-24 (ish kunlari 9:00-18:00); 3) Email: support@hemis.uz. Murojaat qilishda muammo tavsifi, screenshot va foydalanuvchi ma'lumotlarini ilova qiling. Texnik yordam 24 soat ichida ko'rsatiladi.",
      icon: "fas fa-headset",
      color: "#ef4444"
    },
    {
      id: 7,
      question: "HEMIS tizimida talabalar ma'lumotlarini qanday yangilash mumkin?",
      answer: "Talabalar ma'lumotlarini yangilash uchun: 1) HEMIS tizimiga administrator sifatida kiring; 2) 'Talabalar' bo'limiga o'ting; 3) Kerakli talabani qidiring; 4) 'Tahrirlash' tugmasini bosing; 5) Ma'lumotlarni yangilab saqlang. Ommaviy yangilash uchun Excel import funksiyasidan foydalaning. Muhim: shaxsiy ma'lumotlarni o'zgartirish uchun hujjatlar talab qilinadi.",
      icon: "fas fa-user-edit",
      color: "#ec4899"
    },
    {
      id: 8,
      question: "Markaz xizmatlaridan foydalanish uchun shartnoma tuzish tartibi qanday?",
      answer: "Shartnoma tuzish tartibi: 1) Rasmiy ariza yuboring (etm@edu.uz); 2) Texnik topshiriq tayyorlang; 3) Markaz mutaxassislari bilan uchrashuvni belgilang; 4) Tijoriy taklif va shartnoma loyihasini oling; 5) Shartnomani imzolang; 6) To'lovni amalga oshiring. Davlat tashkilotlari uchun tender orqali ishlash imkoniyati mavjud. Shartnoma tuzish 5-7 ish kunini oladi.",
      icon: "fas fa-file-contract",
      color: "#14b8a6"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="savollar-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="savollar-header">
          <div className="header-icon">
            <i className="fas fa-question-circle"></i>
          </div>
          <h1>Ko'p beriladigan savollar</h1>
          <p>Eng ko'p so'raladigan savollarga javoblar</p>
        </div>

        {/* Search */}
        <div className="savollar-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Savollardan qidirish..." />
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-icon" style={{ background: faq.color }}>
                  <i className={faq.icon}></i>
                </div>
                <span className="faq-question-text">{faq.question}</span>
                <div className="faq-toggle">
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="savollar-cta">
          <div className="cta-icon">
            <i className="fas fa-comments"></i>
          </div>
          <div className="cta-content">
            <h3>Savolingizga javob topa olmadingizmi?</h3>
            <p>Biz bilan bog'laning, mutaxassislarimiz yordam beradi</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+998712031324" className="cta-btn phone">
              <i className="fas fa-phone-alt"></i>
              Qo'ng'iroq qilish
            </a>
            <a href="mailto:etm@edu.uz" className="cta-btn email">
              <i className="fas fa-envelope"></i>
              Yozish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savollar;
