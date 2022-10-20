import React from 'react';
import './PortfolioCard.scss';

const PortfolioCard = (props) => {
  const cardSize = props.cardSize;
  const tagType = props.tagType;
  const title = props.title;
  const img = props.img;

  const setSize =
    cardSize === 'full'
      ? 'PortfolioCard--full'
      : cardSize === 'medium'
      ? 'PortfolioCard--medium'
      : 'PortfolioCard--default';

  return (
    <div className="PortfolioCard" style={{ backgroundImage: `url(${img})` }}>
      <div className={`${setSize}`}>
        <div className="PortfolioCard__tag">
          <p>{tagType}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
