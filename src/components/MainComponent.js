import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import TimeTable from './TimetableComponent';
import Help from './HelpComponent';
import About from './AboutComponent';
import { CAROUSELDETAILS } from '../shared/carouselDetails';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselDetails: CAROUSELDETAILS
    };
  }

  render() {
    const HomePage = () => {
        return(
            <Home details={this.state.carouselDetails}/>
        );
    }

    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/timetables" component={TimeTable}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/help" component={Help}/>
            <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
