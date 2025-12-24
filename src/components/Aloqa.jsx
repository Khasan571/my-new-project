import { useState } from 'react';
import './Aloqa.css';

const Aloqa = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = {
    address: "100095 Toshkent shahri, Olmazor, Ziyo ko'chasi, 3",
    phone: "(+998 71) 203-13-24",
    email: "etm@edu.uz",
    workHours: "Dushanba - Juma: 09:00 - 18:00"
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Xabaringiz yuborildi!");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="aloqa-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </button>

        {/* Header */}
        <div className="aloqa-header">
          <h1>Biz bilan bog'laning</h1>
          <p>Savollaringiz bormi? Biz bilan bog'laning va tez orada javob oling</p>
        </div>

        {/* Main Content */}
        <div className="aloqa-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Xabar yuborish</h2>
              <p>Formani to'ldiring va biz siz bilan bog'lanamiz</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Ism-familiya</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email manzilingiz"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Mavzu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Xabar mavzusi"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Xabar</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Xabaringizni yozing..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Yuborish</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-details">
                  <h3>Manzil</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-details">
                  <h3>Telefon</h3>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-details">
                  <h3>Ish vaqti</h3>
                  <p>{contactInfo.workHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-section">
          <div className="map-header">
            <h2>Bizning joylashuvimiz</h2>
            <p>Toshkent shahri, Olmazor tumani</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5234567890123!2d69.2193456!3d41.3112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjQiTiA2OcKwMTMnMDkuNiJF!5e0!3m2!1suz!2suz!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RTTRM joylashuvi"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aloqa;
