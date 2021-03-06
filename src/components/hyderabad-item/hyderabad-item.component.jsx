import React from 'react';





import './hyderabad-item.styles.scss';

const HyderabadItem = ({ item}) => {
  const { name, noofitem, imageUrl } = item;

  return (
    <div className='hyderabad-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='hyderabad-footer'>
        <span className='name'>{name}</span>
        <span className='noofitem'>{noofitem}</span>
      </div>
      
    </div>
  );
};



export default HyderabadItem;