import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = (e: React.MouseEvent) => {
    e.preventDefault();
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">JP</a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#experience">{t('nav.experience')}</a></li>
          <li><a href="#skills">{t('nav.skills')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#education">{t('nav.education')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
          <li>
            <a 
              href="#" 
              onClick={toggleLang}
              title={t('nav.switchTitle')}
              style={{ color: 'var(--accent-3)', fontWeight: 'bold' }}
            >
              <i className="fas fa-globe"></i> {t('nav.switch')}
            </a>
          </li>
        </ul>
        <button 
          className="nav-toggle" 
          id="navToggle" 
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
