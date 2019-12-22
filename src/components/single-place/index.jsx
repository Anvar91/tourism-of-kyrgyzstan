import React, {Component} from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom';

class SinglePlace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: null
    }
  }

  async componentDidMount() {
    const placeId = this.props.match.params.placeId;
    const response = await fetch(`http://localhost:3000/places/${placeId}`);
    const place = await response.json();

    this.setState({
      place
    })
  }

  render() {
    if (!this.state.place) {
      return null;
    }

    return (
      <div className='single-place'>
        <h1>{this.state.place.name}</h1>
        <img src={this.state.place.image}/>

        <div className='place-description'>
          <p>{this.state.place.description}</p>
        </div>

        <img src={this.state.place.additionalImages[0]}/>

        <div className='place-description'>
          <p>{this.state.place.subDescription[0]}</p>
        </div>

        <div className='place-description'>
          <p>{this.state.place.subDescription[1]}</p>
        </div>

        <h2>{this.state.place.subName}</h2>

        <img src={this.state.place.additionalImages[1]}/>

        <div className='place-description'>
          <p>{this.state.place.subDescription[2]}</p>
          <p>{this.state.place.subDescription[3]}</p>
          <p>{this.state.place.subDescription[4]}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SinglePlace);
