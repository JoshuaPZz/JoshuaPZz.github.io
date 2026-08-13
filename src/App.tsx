
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { PortfolioEN } from './PortfolioEN';
import { PortfolioES } from './PortfolioES';
import './index.css';

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Navbar />
      {i18n.language === 'en' ? <PortfolioEN /> : <PortfolioES />}
    </>
  );
}

export default App;
