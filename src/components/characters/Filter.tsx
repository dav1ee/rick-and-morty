'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { UrlObject } from 'url';

interface FilterToggleItem {
  type: 'toggle';
  label: string;
  value: string;
  options: {
    label: string;
    href: Omit<UrlObject, 'query'> & { query?: Record<string, any> };
  }[];
}

interface FilterInputItem {
  type: 'input';
  label: string;
  value: string;
}

interface FilterProps {
  items: (FilterToggleItem | FilterInputItem)[];
}

export const Filter: React.FC<FilterProps> = ({ items }) => {
  const [visible, setVisible] = useState(false);

  const filters = items.map((item, index) => {
    if (item.type === 'toggle') {
      return (
        <div className="filter-item" key={index}>
          <span className="filter-item__label">{item.label}:</span>

          <ul className="filter-list">
            {item.options.map((option) => (
              <li
                className="filter-list__item"
                aria-selected={option.label === item.value}
                role="option"
                key={option.label}
              >
                <Link className="filter-list__link" href={option.href}>
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (item.type === 'input') {
      return (
        <div className="filter-item" key={index}>
          <span className="filter-item__label">{item.label}:</span>

          <div className="filter-search">
            <input
              className="filter-search__input"
              type="text"
              placeholder="Rick..."
              name={item.label}
              defaultValue={item.value}
            />

            <button className="filter-search__btn" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"></path>
              </svg>
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div className={`filter ${visible ? 'filter--opened' : ''}`}>
      <span className="filter-show-btn" onClick={() => setVisible(!visible)}>
        Filters {visible ? '↑' : '↓'}
      </span>

      {visible && <form>{filters}</form>}
    </div>
  );
};
