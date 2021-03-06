import React from 'react';

import KOCHI_DATA from './kochipage.data.js';

import KochiPreview from '../../components/kochi-preview/kochi-preview.component';

class KochiPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: KOCHI_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='kochi-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <KochiPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default KochiPage;
