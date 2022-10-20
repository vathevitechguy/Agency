import React from 'react';
import BorderlessBtn from '../../UI/Buttons/Borderless/BorderlessBtn';
import PureBtn from '../../UI/Buttons/Pure/Pure';
import UserReview from '../UserReview/UserReview';
import './HeroWithMedia.scss';

const HeaderBody = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;
  const tagline = props.tagline;
  return (
    <div className="HeaderBody">
      <div className="HeaderBody__row">
        <div className="HeaderBody__col1 HeaderBody__col1-wrapper">
          <h5>{subtitle}</h5>
          <h1>{title}</h1>
          <p>{tagline}</p>
          <BorderlessBtn type="button">How we work</BorderlessBtn>
          <span className="HeaderBody__col1-contactBtn">
            <PureBtn>Contact Us</PureBtn>
          </span>
          <div className="HeaderBody__col1-review">
            <UserReview
              src="./assets/images/user1.png"
              description={`"Put themselves in the merchant's shoes"`}
              company="Meta Inc."
            />
          </div>
        </div>
        <div className="HeaderBody__col2">
          <img src="./assets/images/header1.png" />
        </div>
      </div>
    </div>
  );
};
export default HeaderBody;
