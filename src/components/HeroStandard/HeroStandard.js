import Navbar from '../NavBar/Navbar';
import './HeroStandard.scss';

const HeroStandard = (props) => {
  return (
    <header className="HeroStandard">
      <div className="HeroStandard__wrapper">
        <div className="HeroStandard__body">
          <h1>{props.title}</h1>
          <div className="HeroStandard__subtitle">
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroStandard;
