import React from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom';

class SingleTour extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      tour: null
    }
  }

  async componentDidMount() {
    const tourId = this.props.match.params.tourId;
    const response = await fetch(`http://localhost:3000/tours/${tourId}`)
    const tour = await response.json()

    this.setState({
      tour
    })
  }

  handleClick() {
    alert("Спасибо за покупку!");
  }

  render() {
    if (!this.state.tour) {
      return null;
    }

    return (
      <div className='single-tour'>
        <h1>{this.state.tour.name}</h1>
        <img src={this.state.tour.image}/>

        <div className='description'>
          <p>{this.state.tour.description}</p>
        </div>

          <img src={this.state.tour.additionalImages[0]}/>
        <div className='description'>
          <p>{this.state.tour.longDescription}</p>
        </div>

        <div className='gallery'>
          <div className='pictures'>
            <img src={this.state.tour.additionalImages[1]}/>
            <img src={this.state.tour.additionalImages[2]}/>
            <img src={this.state.tour.additionalImages[3]}/>
            <img src={this.state.tour.additionalImages[4]}/>
            <img src={this.state.tour.additionalImages[5]}/>
            <img src={this.state.tour.additionalImages[6]}/>
          </div>
        </div>

        <div className='buy'>
          <p className='price'><b>Цена:</b> {this.state.tour.price}</p>
          <button className='btn1' onClick={this.handleClick}>Купить</button>
        </div>

      </div>
    )
  }
}



export default withRouter(SingleTour);