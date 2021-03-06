import React from 'react';

import BANGLORE_DATA from './banglorepage.data.js';

import BanglorePreview from '../../components/banglore-preview/banglore-preview.component';

class BanglorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: BANGLORE_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='banglore-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <BanglorePreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default BanglorePage;
