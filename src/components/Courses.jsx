import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      badge: "OTM xodimlari uchun",
      badgeType: "otm",
      title: "HEMIS tizimi bo'yicha o'quv kursi",
      duration: "30 soat",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
      badge: "OTM xodimlari uchun",
      badgeType: "otm",
      title: "Moodle masofaviy ta'limni boshqarish tizimi",
      duration: "30 soat",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      badge: "Barcha uchun",
      badgeType: "all",
      title: "Tarmoq administratorligi bo'yicha o'quv kursi",
      duration: "30 soat",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      badge: "Barcha uchun",
      badgeType: "all",
      title: "Python dasturlash asoslari",
      duration: "40 soat",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      badge: "Barcha uchun",
      badgeType: "all",
      title: "Axborot xavfsizligi asoslari",
      duration: "20 soat",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
      badge: "OTM xodimlari uchun",
      badgeType: "otm",
      title: "Elektron ta'lim metodikasi",
      duration: "25 soat",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="courses-bg"></div>

      <div className="container">
        <div className="courses-header">
          <h2 className="courses-title">
            Quyidagi yo'nalishlar bo'yicha o'quv kurslarida ta'lim olishingiz mumkin
          </h2>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <span className={`course-badge ${course.badgeType}`}>
                  {course.badge}
                </span>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-footer">
                  <div className="course-duration">
                    <i className="far fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                  <a href="#" className="course-btn">
                    Kirish
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
