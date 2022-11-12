import React from 'react';
<<<<<<< HEAD
import './Faqs.scss';
import { FAQS } from '../../constant/script';
import FaqList from './FaqList';

const Faqs = () => {
  return (
    <section className="FAQs">
      <div className="FAQs__listWrapper">
        <h5>FAQ</h5>
        <h3 className="FAQs__title">Frequently Asked Questions</h3>
        <p className="FAQs__text">
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house.
        </p>
      </div>
      <div className="FAQs__listWrapper">
        {FAQS.map((faq, i) => {
          return (
            <FaqList
              key={faq.id}
              id={faq.id}
              title={faq.title}
              content={faq.content}
            />
          );
        })}
      </div>
    </section>
  );
=======

const Faqs = () => {
  return <div>Faqs</div>;
>>>>>>> 31e2bdf6854e6291abf1670d823f41674e39406f
};

export default Faqs;
