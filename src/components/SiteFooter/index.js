import './SiteFooter.scss';

function SiteFooter() {
  return (
    <footer className="SiteFooter">
      <div className="SiteFooter__container">
        <h2 className="SiteFooter__title">Agency</h2>
        <nav className="SiteFooter__menu">
          <h3 className="SiteFooter__header">Menu</h3>
          <ul className="SiteFooter__list">
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
          </ul>
        </nav>
        <nav className="SiteFooter__menu">
          <h3 className="SiteFooter__header">Service</h3>
          <ul className="SiteFooter__list">
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
            <li className="SiteFooter__item">
              <a className="SiteFooter__link">link</a>
            </li>
          </ul>
        </nav>
        <div>social</div>
      </div>
    </footer>
  );
}

export default SiteFooter;
