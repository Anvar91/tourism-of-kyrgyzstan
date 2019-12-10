import React, {Component} from 'react';
import './index.scss';

class Footer extends Component{
  render() {
    return(
      <div className='footer'>
        <div className='footer-nav-bar'>
          <div className='our-contacts'>
            <h4>Наши контакты</h4>
            <p>г.Бишкек, ул. Ибраимова, 115/1</p>
            <p><a href='mailto:imdnvr1991@gmail.com'>imdnvr1991@gmail.com</a></p>
          </div>

          <div className='social-media'>
            <h4>Наши контакты в социальных сетях</h4>
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
          </div>
        </div>

        <div className='all-right-reserved'>
          <span>(c) All rights reserved 2019</span>
        </div>
      </div>
    );
  }
}

export default Footer;