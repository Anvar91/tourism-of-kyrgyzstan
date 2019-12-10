import React from 'react';
import './App.css';
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./modules/home-page";
import Interesting from "./modules/interesting";
import Tours from "./modules/tours";
import Header from "./components/header";
import Footer from "./components/footer";
import Tour from "./modules/tours/Tour";

class App extends React.Component {

  render() {
    return (
        <div>
            <Header />
            <Route path='/' exact={true} component={Home} />
            <Route path='/interesting' component={Interesting} />
            <Route path='/tours' component={Tours} />
            <Footer />
        </div>


    )
  }
}

export default App;