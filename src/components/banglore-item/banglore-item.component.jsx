import React from 'react';





import './banglore-item.styles.scss';

const BangloreItem = ({ item}) => {
  const { name, noofitem, imageUrl } = item;

  return (
    <div className='banglore-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='banglore-footer'>
        <span className='name'>{name}</span>
        <span className='noofitem'>{noofitem}</span>
      </div>
      
    </div>
  );
};



export default BangloreItem;