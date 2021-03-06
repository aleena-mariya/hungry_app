import React from 'react';

import KochiItem from '../kochi-item/kochi-item.component';

import './kochi-preview.styles.scss';

const KochiPreview = ({ title, items }) => (
  <div className='kochi-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <KochiItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default KochiPreview;
