import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { PortfolioEN } from './PortfolioEN';
import { PortfolioES } from './PortfolioES';
import './index.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Timeout ensures DOM elements have rendered
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        revealObserver.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      revealObserver.disconnect();
    };
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      {i18n.language === 'en' ? <PortfolioEN /> : <PortfolioES />}
    </>
  );
}

export default App;
