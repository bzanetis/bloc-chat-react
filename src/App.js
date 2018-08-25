import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

var config = {
    apiKey: "AIzaSyAHgQn_8i6aeGICg_EYCw1XBs9kHxwzF_o",
    authDomain: "bloc-chat-react-41bd9.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-41bd9.firebaseio.com",
    projectId: "bloc-chat-react-41bd9",
    storageBucket: "bloc-chat-react-41bd9.appspot.com",
    messagingSenderId: "718151365920"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="sidebar">
        <header>
         <h1>Bloc Chat!</h1>
        </header>
        <RoomList
          firebase={firebase}
        />
        </div>
      </div>
    );
  }
}

export default App;
