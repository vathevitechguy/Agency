import React, { useState, useEffect } from 'react';
import { DUMMY_DATA } from '../../constant/script';
import BorderlessBtn from '../../UI/Buttons/Borderless/BorderlessBtn';
import Filter from '../Filter/Filter';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './PortfolioCards.scss';

const defaultContent = DUMMY_DATA.map((card, index) => {
  const { data } = card;
  return data.map((datum, i) => {
    if (index === 0 && datum.id.endsWith('1')) {
      return (
        <PortfolioCard
          key={datum.id}
          title={datum.title}
          tagType={datum.type}
          img={datum.img}
          // cardSize="full"
        />
      );
    } else
      return (
        <PortfolioCard
          key={datum.id}
          title={datum.title}
          tagType={datum.type}
          img={datum.img}
          // cardSize="medium"
        />
      );
  });
});

const PortfolioCards = () => {
  const [currentType, setCurrentType] = useState({
    type: 'showAll',
    content: defaultContent,
  });

  const [isActive, setActive] = useState(null);

  const filterCardsHandler = (clickedType) => {
    const filteredContent = DUMMY_DATA.filter(
      (cards) => cards.type === clickedType
    ).map((card) => {
      console.log(card.data);
      return card.data.map((datum, i) => {
        return (
          <PortfolioCard
            key={datum.id}
            title={datum.title}
            tagType={datum.type}
            img={datum.img}
          />
        );
      });
    });

    setCurrentType({
      type: clickedType,
      content: clickedType !== 'showAll' ? filteredContent : defaultContent,
    });
  };

  useEffect(() => {
    filterCardsHandler(isActive);
  }, [isActive]);

  return (
    <section className="PortfolioCas">
      <Filter
        isActive={isActive}
        setActive={setActive}
        onClick={filterCardsHandler}
      />
      <div className="PortfolioCards">{currentType.content}</div>
      <div>
        <center>
          <BorderlessBtn customStyle="PortfolioCards__button">
            Load More
          </BorderlessBtn>
        </center>
      </div>
    </section>
  );
};

export default PortfolioCards;
