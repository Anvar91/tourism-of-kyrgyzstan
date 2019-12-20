import React from 'react';
import './index.scss';
import InfoKg from "../infoKg";
import Tour from "../../modules/tours/Tour";

class AboutKg extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      infoKg: []
    }
  }

  render() {
    return(
      <div className='about-kg'>
        <h1>О Кыргызстане</h1>

        <div className='info-block'>

        </div>

      </div>
    );
  }
}

export default AboutKg;