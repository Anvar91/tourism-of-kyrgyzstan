import React from 'react';
import './index.scss';

class Main extends React.Component {
  render() {
    return(
      <div className='main-page'>
        <div className='title'>
          <h1>Добро пожаловать в Кыргызстан</h1>
          <p className='paragraph'>Путешествуй с удовольствием</p>
        </div>
      </div>
    );
  }
}

export default Main;