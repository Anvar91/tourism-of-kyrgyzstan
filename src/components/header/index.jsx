import React, {Component} from 'react';
import './index.scss';
import logo from '../../img/mountains.svg';
import {NavLink} from "react-router-dom";
import Tour from "../../modules/tours/Tour";

class Header extends Component{
  render() {
    return(
      <div className='header' id='header'>
        <div className="main-nav-bar">
          <div className='logo'>
            <NavLink to='/'><img src={logo} alt='Logo'/></NavLink>
          </div>

          <div className='nav-bar1'>
            <NavLink to='/places'>Туристические места</NavLink>
            <NavLink to='/articles'>Интересные статьи</NavLink>
            <NavLink to='/tours'>Туры</NavLink>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;