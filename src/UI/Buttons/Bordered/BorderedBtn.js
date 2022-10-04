import React from 'react';
import Styles from './BorderedBtn.module.css';

const BorderedBtn = (props) => {
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

export default BorderedBtn;
