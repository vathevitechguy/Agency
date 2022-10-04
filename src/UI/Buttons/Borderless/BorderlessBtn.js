import React from 'react';
import Styles from './BorderlessBtn.module.css';

const BorderlessBtn = (props) => {
  return (
    <React.Fragment>
      <button type={props.type} className={Styles.BorderlessBtn}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default BorderlessBtn;
