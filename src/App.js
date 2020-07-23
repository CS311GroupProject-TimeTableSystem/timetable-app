import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDu7OqiFRmnYh_81Dcke6m9jxiUuqFjU8M",
  authDomain: "shifted-timetables.firebaseapp.com",
  databaseURL: "https://shifted-timetables.firebaseio.com",
  projectId: "shifted-timetables",
  storageBucket: "shifted-timetables.appspot.com",
  messagingSenderId: "284988692648",
  appId: "1:284988692648:web:3ddec0cce41eca1fe44a9d",
  measurementId: "G-2LKBD9QF2C"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
