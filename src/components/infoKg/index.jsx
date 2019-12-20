import React from 'react';
import './index.scss';

class InfoKg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoKg: []
    }
  }

  render() {

    return(
    <div className='infoKg'>
      <div className='image'>
        <img src={this.state.infoKg.image}/>
      </div>


      <div className='text-block'>
        <div className='description'>{this.state.infoKg.description}</div>
      </div>
    </div>
    );
  }
}

export default InfoKg;