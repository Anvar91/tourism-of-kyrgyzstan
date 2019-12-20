import React, {Component} from 'react';
import './index.scss';
import {Link} from "react-router-dom";

class Place extends Component {
  render() {
    return(
      <>
        <img src={this.props.place.image} />
        <h2 className='place-title'title={this.props.place.name}>{this.props.place.name}</h2>
        <p className='place-description'><b>Описание:</b> {this.props.place.description}</p>

        <Link to={`/touristic-places/${this.props.place.id}`}><p className='more'>Узнать подробнее...</p></Link>
      </>
    );
  }
}

export default Place;