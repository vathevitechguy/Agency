import React from 'react';
import Styles from './BorderlessBtn.module.css';

const BorderlessBtn = (props) => {
  const bgColor = props.setBgColor;
  return (
    <React.Fragment>
      <button
        type={props.type}
        className={`${Styles.BorderlessBtn} ${props.customStyle}`}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default BorderlessBtn;
