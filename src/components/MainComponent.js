import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import TimeTable from './TimetableComponent';
import Help from './HelpComponent';
import About from './AboutComponent';
import Signup from './SignupComponent';
import {useSelector} from 'react-redux';

export default function Main(props) {

  const carouselDetails = useSelector(state => state.carouselDetails);

  const HomePage = () => {
      return(
          <Home details={carouselDetails}/>
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
          <Route exact path="/signup" component={Signup}/>
          <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}
