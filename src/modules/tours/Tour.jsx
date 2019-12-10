import React from 'react';

class Tour extends React.Component {
  render() {
    return <>
      <img src={this.props.tour.image} />
      <h2 className='tour-title'title={this.props.tour.name}>{this.props.tour.name}</h2>
      <p><b>Дни:</b> {this.props.tour.days}</p>
      <p className='description'><b>Описание:</b> {this.props.tour.description}</p>
      <p><b>Цена:</b> {this.props.tour.price}</p>

      <button className='buttn'>Узнать подробнее {this.props.tour.id}</button>
    </>
  }
}

export default Tour;