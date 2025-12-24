import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      href: '#about',
      label: 'Markaz haqida',
      hasDropdown: true,
      dropdownItems: [
        { href: '#rahbariyat', label: 'Rahbariyat', page: 'rahbariyat' },
        { href: '#tuzilma', label: 'Tashkiliy tuzilma', page: 'tashkiliy-tuzilma' },
        { href: '#bolimlar', label: "Bo'limlar", page: 'bolimlar' },
        { href: '#vazifalar', label: 'Markaz vazifalari', page: 'markaz-vazifalari' },
        { href: '#aloqa', label: 'Aloqa', page: 'aloqa' },
        { href: '#vakansiya', label: "Bo'sh ish o'rinlari", page: 'vakansiya' },
      ]
    },
    {
      href: '#activities',
      label: 'Faoliyat',
      hasDropdown: true,
      dropdownItems: [
        { href: '#korrupsiya', label: 'Korrupsiyaga qarshi kurash', page: 'korrupsiya' },
        { href: '#ochiq-malumotlar', label: "Ochiq ma'lumotlar", page: 'ochiq-malumotlar' },
        { href: '#xizmatlar', label: 'Xizmatlar', page: 'xizmatlar' },
        { href: '#normativ', label: 'Normativ huquqiy-hujjatlar', page: 'normativ' },
      ]
    },
    {
      href: '#news',
      label: 'Yangiliklar',
      hasDropdown: true,
      dropdownItems: [
        { href: '#yangiliklar', label: 'Yangiliklar', page: 'yangiliklar' },
      ]
    },
    {
      href: '#services',
      label: 'Interaktiv xizmatlar',
      hasDropdown: true,
      dropdownItems: [
        { href: '#davlat-xizmatlari', label: 'Interaktiv davlat xizmatlari', page: 'davlat-xizmatlari' },
        { href: '#savollar', label: "Ko'p beriladigan savollar", page: 'savollar' },
      ]
    },
    {
      href: '#projects',
      label: 'Loyihalar',
      hasDropdown: true,
      dropdownItems: [
        { href: '#axborot-tizimlari', label: 'Axborot tizimlari', page: 'axborot-tizimlari' },
        { href: '#oquv-kurslar', label: "O'quv kurslar", page: 'oquv-kurslar' },
      ]
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveDropdown(null);
    if (page && setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo" onClick={handleLogoClick}>
          <div className="logo-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <span className="logo-text">RTTRM</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => link.hasDropdown && handleMouseEnter(index)}
              onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
            >
              {link.hasDropdown ? (
                <>
                  <a
                    href={link.href}
                    className={`nav-link ${activeDropdown === index ? 'active' : ''}`}
                  >
                    {link.label}
                    <i className={`fas fa-chevron-down nav-arrow ${activeDropdown === index ? 'rotated' : ''}`}></i>
                  </a>
                  <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                    {link.dropdownItems.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="dropdown-link" onClick={(e) => handleLinkClick(e, item.page)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                  <i className="fas fa-chevron-down nav-arrow"></i>
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
