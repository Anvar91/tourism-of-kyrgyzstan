import React from 'react';
import './App.css';
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./modules/home-page";
import Tours from "./modules/tours";
import Articles from "./modules/articles";
import Tour from "./modules/tours/Tour";
import SingleTour from "./modules/single-tour";
import Header from "./components/header";
import Footer from "./components/footer";
import TouristicPlaces from "./modules/touristic-places";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
           <Route path='/' exact={true} component={Home} />
           <Route path='/articles' component={Articles} />
           <Route path='/touristic-places' component={TouristicPlaces}/>
           {/*<Route path='/touristic-places/:placeId' component={SinglePlace}/>*/}
           <Route path='/tours' component={Tours} exact={true}/>
           <Route path='/tours/:tourId' component={SingleTour} exact={true}/>
        <Footer/>
      </div>
    )
  }
}

export default App;