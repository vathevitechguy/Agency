import React from 'react';
import './UserReview.scss';

const UserReview = (props) => {
  const src = props.src;
  const description = props.description;
  const company = props.company;

  return (
    <React.Fragment>
      <div className="UserReview">
        <div className="UserReview__img">
          <img src={src} />
        </div>
        <div className="UserReview__description">
          <p>{description}</p>
          <h5>{company}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserReview;
