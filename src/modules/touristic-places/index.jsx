import React, {Component} from 'react';
import './index.scss';
import Place from "../../components/place";
import Nature from '../../img/nature.jpg'

class TouristicPlaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    }
  }

  async componentDidMount() {
    const response = await fetch ('http://localhost:3000/places');
    const places = await response.json();

    this.setState({
      places: places
    })
  }

  render() {
    return(
      <div className='places'>
        <h1>Туристические места</h1>
        <div className='img'>
          <img src={Nature} alt='Nature'/>
        </div>

        <div className='block-text'>
          <p>В данном разделе вы можете познакомится и узнать про нашу красивую страну, про интересные и красивые достопримечательности нашей страны.</p>
        </div>

        <div className='container-places'>
          {this.state.places.map((place) =>
            <div className='place'>
              <Place place={place}/>
            </div>)}
        </div>
      </div>
    );
  }
}

export default TouristicPlaces;