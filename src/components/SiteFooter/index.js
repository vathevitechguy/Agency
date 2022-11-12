import './SiteFooter.scss';

function SiteFooter(props) {
  const lightTheme = props.lightTheme;
  return (
    <footer className={`SiteFooter ${lightTheme && 'SiteFooter__lightTheme'}`}>
      <div className="SiteFooter__container">
        <div className="SiteFooter__top">
          <h4 className="SiteFooter__title">Personal</h4>

          <nav className="SiteFooter__menu">
            <h5 className="SiteFooter__header">Menu</h5>
            <ul className="SiteFooter__list">
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  About
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Services
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Blog
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav className="SiteFooter__menu">
            <h5 className="SiteFooter__header">Service</h5>
            <ul className="SiteFooter__list">
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Design
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Development
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  Marketing
                </a>
              </li>
              <li className="SiteFooter__item">
                <a href="#" className="SiteFooter__link">
                  See More
                </a>
              </li>
            </ul>
          </nav>

          <div className="SiteFooter__socials">
            <img
              src="./images/socials/facebook.svg"
              className="SiteFooter__button"
            />
            <img
              src="./images/socials/twitter.svg"
              className="SiteFooter__button"
            />
            <img
              src="./images/socials/instagram.svg"
              className="SiteFooter__button"
            />
          </div>
        </div>

        <div className="SiteFooter__line" />

        <div className="SiteFooter__bottom">
          <p className="SiteFooter__copyright">
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </p>
          <ul className="SiteFooter__horizontal-list">
            <li className="SiteFooter__item">
              <a href="#" className="SiteFooter__link">
                Terms of Use
              </a>
            </li>
            <li className="SiteFooter__item">
              <a href="#" className="SiteFooter__link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
