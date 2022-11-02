import React from 'react';
import './Profile.scss';

const Profile = (props) => {
  const fullName = props.fullName;
  const imgSrc = props.imgSrc;
  const jobTitle = props.jobTitle;
  return (
    <div className="Profile">
      <div className="Profile__image__contianer">
        <img src={imgSrc} alt={fullName} />
      </div>
      <h4 className="Profile__name">{fullName}</h4>
      <p className="Profile__jobtitle">{jobTitle}</p>
    </div>
  );
};

export default Profile;
