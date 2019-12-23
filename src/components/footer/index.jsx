import React, {Component} from 'react';
import './index.scss';

class Footer extends Component{
  render() {
    return(
      <div className="footer">
        <div className="footer-important-tittle wow fadeInLeft">
          <span className="footer-important-tittle-text">ищите нас тут</span>
        </div>

        <div className="footer-top">
          <div className="footer-item wow fadeInLeft">
            <span className="footer-tittle">Наш адрес:</span>
            <span className="footer-text">г.Бишкек, ул. Ибраимова, 115/1</span>
            <span className="footer-text">Где Дордой.Плаза</span>
          </div>

          <div className="footer-item wow fadeInLeft">
            <span className="footer-tittle">Наши контакты:</span>
            <span className="footer-text">+996500234322</span>
            <span className="footer-text">imdnvr1991@gmail.com</span>
          </div>

          <div className="footer-item wow fadeInLeft">
            <div>
              <span className="footer-tittle">Мы в соц.сетях:</span>
            </div>

            <div className="footer-image wow fadeInLeft">
              <div className="footer-mini-image">
                <img className="instagram" src="img/instagram.png" />
              </div>
              <div className="footer-mini-image">
                <img src="img/twitter.png" />
              </div>
              <div className="footer-mini-image">
                <img src="img/facebook.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-end wow fadeInLeft">
          <span className="footer-tittle-end">All right reserved ©2019</span>
        </div>
      </div>
    );
  }
}

export default Footer;