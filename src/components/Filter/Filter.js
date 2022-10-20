import { useState, useEffect } from 'react';
import { DUMMY_DATA, TOTAL_PRODUCT } from '../../constant/script';
import './Filter.scss';

const Filter = (props) => {
  const isActive = props.isActive;
  const setActive = (type) => props.setActive(type);

  useEffect(() => {
    setActive('showAll');
  }, []);

  const lists = DUMMY_DATA.map((card) => {
    const { type, data } = card;
    return (
      <li
        key={Math.random()}
        onClick={() => {
          setActive(type);
          props.onClick(isActive);
        }}
        className={`${isActive === type && 'active'}`}
      >
        {type} <sup>{data.length}</sup>
      </li>
    );
  });

  return (
    <div className="Filter">
      <ul className="Filter__ul">
        <li
          onClick={() => {
            setActive('showAll');
            props.onClick(isActive);
          }}
          className={`${isActive === 'showAll' && 'active'}`}
        >
          Show All <sup>{TOTAL_PRODUCT}</sup>
        </li>
        {lists}
      </ul>

      <div className="Filter__mobile">
        <select
          value={isActive}
          onChange={(e) => {
            setActive(e.target.value);
            props.onClick(isActive);
          }}
        >
          <option value="showAll">Show All</option>
          {DUMMY_DATA.map((card) => (
            <option
              value={card.type}
              key={Math.random()}
            >{`${card.type} `}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
