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
    </div>
  );
};

export default FaqList;
