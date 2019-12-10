import React from 'react';
import './index.scss';

class InfoKg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props}
  }

  render() {
    const {imagePosition, imageSource, description} = this.state;

    return(
    <div className='infoKg'>
      <img
        className={imagePosition}
        src={imageSource}
      />

      <div className='text-block'>
        <div className='description'>{description}</div>
      </div>
    </div>
    );
  }
}

export default InfoKg;