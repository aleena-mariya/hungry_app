import React from 'react';

import HYDERABAD_DATA from './hyderabadpage.data.js';

import HyderabadPreview from '../../components/hyderabad-preview/hyderabad-preview.component';

class HyderabadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: HYDERABAD_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='hyderabad-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <HyderabadPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default HyderabadPage;
