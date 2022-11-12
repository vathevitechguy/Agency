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
    </div>
  );
};

export default FaqList;
