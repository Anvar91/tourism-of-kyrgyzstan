import React from 'react';
import {Link} from "react-router-dom";

class Tour extends React.Component {
  render() {
    return <>
      <img src={this.props.tour.image} />
      <h2 className='tour-title'title={this.props.tour.name}>{this.props.tour.name}</h2>
      <p><b>Дни:</b> {this.props.tour.days}</p>
      <p className='description'><b>Описание:</b> {this.props.tour.description}</p>
      <p><b>Цена:</b> {this.props.tour.price}</p>

      <Link to={`/tours/${this.props.tour.id}`}><p className='more'>Узнать подробнее...</p></Link>
    </>
  }
}

export default Tour;