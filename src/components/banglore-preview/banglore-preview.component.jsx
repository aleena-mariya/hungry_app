import React from 'react';

import BangloreItem from '../banglore-item/banglore-item.component';

import './banglore-preview.styles.scss';

const BanglorePreview = ({ title, items }) => (
  <div className='banglore-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <BangloreItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default BanglorePreview;