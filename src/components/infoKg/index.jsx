import React from 'react';
import './index.scss';

class InfoKg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...this.props}
  }
  render() {
    const {image, description} = this.props.infoKg;

    return(
    <div className='infoKg'>
      <div className='image'>
        <img src={image}/>
      </div>

      <div className='text-block'>
        <span className='text-description'>{description}</span>
      </div>
    </div>
    );
  }
}

export default InfoKg;