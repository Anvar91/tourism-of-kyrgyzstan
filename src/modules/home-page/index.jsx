import React from 'react';
import './index.scss';
import Button from "../../components/button";
import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";
import {withRouter} from 'react-router-dom';
import Tours from "../tours";

class Home extends React.Component{
  render() {
    return (
      <div className='home-page'>
        <Main/>
      </div>
  );
  }
}

export default withRouter(Home);