import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import TimeTable from './TimetableComponent';
import Help from './HelpComponent';
import About from './AboutComponent';
import Signup from './SignupComponent';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCarousel, fetchCalendar, fetchNotice, fetchStaff} from '../redux/ActionCreators';

export default function Main() {
  const carouselDetails = useSelector(state => state.carouselDetails);
  const calendarDetails = useSelector(state => state.calendarDetails);
  const staffDetails = useSelector(state => state.staffDetails);
  const noticeDetails = useSelector(state => state.noticeDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarousel());
    dispatch(fetchCalendar());
    dispatch(fetchNotice());
    dispatch(fetchStaff());
  }, []);

  const HomePage = () => {
    return(
        <Home 
          calendar={calendarDetails.calendar}
          calendarLoading={calendarDetails.isLoading}
          calendarErrMess={calendarDetails.errMess} 
          notice={noticeDetails.notice}
          noticeLoading={noticeDetails.isLoading}
          noticeErrMess={noticeDetails.errMess}  
          staff={staffDetails.staff}
          staffLoading={staffDetails.isLoading}
          staffErrMess={staffDetails.errMess}   
          details={carouselDetails.carousel}
          carouselLoading={carouselDetails.isLoading}
          carouselErrMess={carouselDetails.errMess}
        />
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
