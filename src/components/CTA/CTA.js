import React from 'react';
import BorderlessBtn from '../../UI/Buttons/Borderless/BorderlessBtn';
import './CTA.scss';

function CTA(props) {
  const customStyles = props.customStyles;
  const zIndexed = props.zIndexed;
  return (
    <section className={` CTA ${zIndexed && 'CTA__zIndexedBody'}`}>
      <div
        className={`CTA__wrapper ${
          zIndexed && 'CTA__zIndexedContent'
        } ${customStyles}`}
      >
        <div className="CTA__col1">
          <h1>Help To Build Your Dream Project</h1>
          <p>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>

          <BorderlessBtn customStyle="CTA__button">Contact Now</BorderlessBtn>
        </div>
        <div className="CTA__col2">
          <img src="./assets/images/CTA.png" alt="call-to-action" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
