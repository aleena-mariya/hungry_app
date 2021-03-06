import React from 'react';





import './kochi-item.styles.scss';

const KochiItem = ({ item}) => {
  const { name, noofitem, imageUrl } = item;

  return (
    <div className='kochi-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='kochi-footer'>
        <span className='name'>{name}</span>
        <span className='noofitem'>{noofitem}</span>
      </div>
      
    </div>
  );
};



export default KochiItem;