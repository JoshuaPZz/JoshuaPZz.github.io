import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact',
            switch: 'ES',
            switchTitle: 'Cambiar a Español'
          }
        }
      },
      es: {
        translation: {
          nav: {
            about: 'Sobre mí',
            experience: 'Experiencia',
            skills: 'Skills',
            projects: 'Proyectos',
            education: 'Educación',
            contact: 'Contacto',
            switch: 'EN',
            switchTitle: 'Switch to English'
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
