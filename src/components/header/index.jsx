import React, {Component} from 'react';
import './index.scss';
import logo from '../../img/mountains.svg';
import {NavLink} from "react-router-dom";

class Header extends Component{
  render() {
    return(
      <div className='header' id='header'>
        <div className="main-nav-bar">
          <div className='logo'>
            <NavLink to='/'><img src={logo} alt='Logo'/></NavLink>
          </div>

          <div className='nav-bar1'>
            <NavLink to='/touristic-places'>Туристические места</NavLink>
            <NavLink to='/interesting' exact>Интересные статьи</NavLink>
            <NavLink to='/tours'>Туры</NavLink>
          </div>

          {/*<div className='nav-bar-2'>*/}
          {/*  <a className="btn" href="#">User profile</a>*/}
          {/*</div>*/}
        </div>
      </div>

    );
  }
}

export default Header;