import React from 'react';
import { gallery, analytics } from '../../constant/script';
import './AboutBody.scss';

const AboutBody = () => {
  return (
    <section className="AboutBody">
      <div className="AboutBody__about">
        <div className="AboutBody__about--main">
          <div className="col1">
            <h5>About</h5>
            <h2>An experience design Agency</h2>
          </div>
          <div className="col2">
            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team. <br />
              <br /> A digital agency is a business you hire to outsource your
              digital marketing efforts, instead of handling in-house. They can
              provide your business with a variety of digital solutions to
              promote your product or service online and help you.
            </p>
          </div>
        </div>
        <div className="AboutBody__about--gallery">
          <div className="col1">
            <img
              src="./assets/images/About/video.png"
              className="gallery-video"
              alt="video"
            />
          </div>
          <div className="col2">
            {gallery.map((element, i) => {
              if (element.type === 'video') return;
              return (
                <div
                  key={Math.random()}
                  className={`AboutBody__about--gallery__img`}
                >
                  <img
                    src={element.src}
                    className={`gallery-img${i + 1}`}
                    alt="gallery-img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="AboutBody__features">
        <div className="AboutBody__features--main">
          <div className="AboutBody__features__col1">
            <h5>Features</h5>
            <p className="text_big">
              Long run, and work as an extension of the merchant's team.
            </p>

            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension.
            </p>
          </div>
          <div className="AboutBody__features__col2">
            <div className="fbox1">
              <img src="./assets/icons/professional.png" alt="" />
              <h4>Professional</h4>
              <p>Full service range including technical skills, design.</p>
            </div>
            <div className="fbox2">
              <h4>Accessibility</h4>
              <p>Business understanding, ability to put themselves.</p>
            </div>
          </div>
        </div>
        <div className="AboutBody__features--analytics">
          {analytics.map((element, i) => {
            return (
              <div className="analytic_box" key={element.id}>
                <h3>{element.figure}</h3>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutBody;
