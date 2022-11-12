<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './FaqList.scss';

const FaqList = (props) => {
  const title = props.title;
  const content = props.content;
  const id = props.id;
  // const isActive = props.isActive;

  const [isActive, setIsActive] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(null);
  const direction = !toggleBtn ? 'down' : 'up';

  useEffect(() => {
    setToggleBtn((prev) => !prev);
  }, [isActive]);

  const toggleIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div key={id} className={`FaqList ${isActive && 'is-active'}`}>
      <div className="FaqList__heading">
        <h4>{title}</h4>
        <img
          src={`./assets/icons/${direction}.svg`}
          id={props.id}
          alt={`arrow-${direction}`}
          onClick={toggleIsActive}
        />
      </div>
      {isActive && <p className="FaqList__content">{content}</p>}
=======
import React from 'react';

const FaqList = (props) => {
  const title = props.title;
  const direction = props.direction;
  const content = props.content;
  return (
    <div className="FaqList">
      <div className="FaqList__heading">
        <h4>{title}</h4>
        <img src={`./assets/icons/${direction}.svg`} alt="" />
      </div>
      <p>{content}</p>
>>>>>>> 31e2bdf6854e6291abf1670d823f41674e39406f
    </div>
  );
};

export default FaqList;
