import React from 'react';

import HyderabadItem from '../hyderabad-item/hyderabad-item.component';

import './hyderabad-preview.styles.scss';

const HyderabadPreview = ({ title, items }) => (
  <div className='hyderabad-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <HyderabadItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default HyderabadPreview;
