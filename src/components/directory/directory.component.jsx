import React from 'react';

import Items from '../items/items.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'KOCHI',
          imageUrl: 'https://i.ibb.co/nc1hNC1/sunset-2611910.jpg',
          id: 1,
          linkUrl: 'KOCHI'
        },
        {
          title: 'HYDERABAD',
          imageUrl: 'https://i.ibb.co/1QsCj8f/the-palm-962785.jpg',
          id: 2,
          linkUrl: 'HYDERABAD'
        },
        {
          title: 'BANGLORE',
          imageUrl: 'https://i.ibb.co/CzDynLY/cafe-3537801.jpg',
          id: 3,
          linkUrl: 'BANGLORE'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Items key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

