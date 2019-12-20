import React, {Component} from 'react';
import Header from "../header";
import Footer from "../footer";

class Core extends Component {
  render() {
    return (
      <div className='core'>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Core;