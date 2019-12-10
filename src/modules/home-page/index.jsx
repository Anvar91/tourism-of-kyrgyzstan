import React from 'react';
import './index.scss';
import Button from "../../components/button";
import Header from "../../components/header";
import Main from "../../components/main";
import {withRouter} from 'react-router-dom';
import AboutKg from "../../components/aboutKg";


class Home extends React.Component{
  render() {
    return (
      <div className='home-page'>
        <Main/>
        <AboutKg />
      </div>
  );
  }
}

export default withRouter(Home);