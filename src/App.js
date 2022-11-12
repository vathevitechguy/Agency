import './App.scss';
import SiteHeader from './components/SiteHeader/index';
// import SiteHeaderTwo from './components/HeroStandard/HeroStandard';
import ClientCarousel from './components/ClientCarousel/ClientCarousel';
import SiteFooter from './components/SiteFooter/index';
import HeroStandard from './components/HeroStandard/HeroStandard';
import PortfolioCards from './components/PortfolioCards/PortfolioCards';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="App">
      <HeroStandard
        logoTitle="Agency"
        title="Portfolio"
        subtitle="Agency provides a full service range including technical skills, design, business understanding.."
      />
      <PortfolioCards />
      <CTA />
      <SiteFooter />
    </div>
  );
}

export default App;
