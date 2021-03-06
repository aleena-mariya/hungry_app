import React from 'react';
import { withRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './items.styles.scss';

const Item = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <NavLink activeClassName="subtitle" to ="/KOCHI">See More</NavLink>

    </div>
  </div>
);

export default withRouter(Item);


