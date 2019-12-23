import React from 'react';
import './index.scss';
import {KYRGYZSTAN} from "../../data";
import InfoKg from "../infoKg";

class AboutKg extends React.Component {
  render() {
    return(
      <div className='about-kg'>
        <h1>О Кыргызстане</h1>

        <div className='info-block'>
            {KYRGYZSTAN.map((infoKg) => {
              return (
                <InfoKg infoKg={infoKg}/>
              )
            })}
        </div>

      </div>
    );
  }
}

export default AboutKg;