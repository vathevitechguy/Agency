import Navbar from '../../Navbar/Navbar';
import './SiteHeaderTwo.scss';

const SiteHeaderTwo = (props) => {
  return (
    <header className="SiteHeaderTwo">
      <div className="SiteHeaderTwo__wrapper">
        <Navbar title={props.logoTitle} />
        <div className="SiteHeaderTwo__body">
          <h1>{props.title}</h1>
          <div className="SiteHeaderTwo__subtitle">
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeaderTwo;
