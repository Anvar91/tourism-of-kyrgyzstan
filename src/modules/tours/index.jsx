import React from 'react';
import './index.scss';
import Tour from "./Tour";

class Tours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/tours');
    const tours = await response.json();

    this.setState({
      tours: tours
    })
  }

  render() {
    return(
      <div className='tours'>
        <h1>Туры</h1>
        <div className='container-tours'>
          {this.state.tours.map((tour) => <div className='tour'>
            <Tour tour={tour} />
          </div>)}
        </div>
      </div>
    )
  }
}

export default Tours;