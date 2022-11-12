import HeaderBody from '../HeroWithMedia/HeroWithMedia';
import Navbar from '../NavBar/Navbar';
import './SiteHeader.scss';

const SiteHeader = (props) => {
  return (
    <header className="SiteHeader">
      <div className="SiteHeader__wrapper">
        <Navbar title="Agency" />
        <HeaderBody
          subtitle="MODERN STUDIO"
          title="We’re Help To Build Your Dream Project"
          tagline="Agency provides a full service range including technical skills,
            design, business understanding."
        />
      </div>
    </header>
  );
};

export default SiteHeader;
