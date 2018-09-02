import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import * as firebase from 'firebase';

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
  constructor(props){
      super(props);
       this.state = {
         activeRoom :''
      }
      this.setCurrentRoom = this.setCurrentRoom.bind(this);
    }
    setCurrentRoom(room){
        this.setState({activeRoom: room})
       }

  render() {
    return (
      <div className="App">
       <div className="sidebar">
        <header>
         <h1>Bloc Chat React</h1>
        </header>

        <RoomList
          firebase={firebase}
          activeRoom = {this.state.activeRoom}
          setCurrentRoom= {this.setCurrentRoom}

        />

        </div>
        <div>
          <MessageList
            firebase={firebase}
            activeRoom= {this.state.activeRoom }
           />
        </div>
      </div>
    );
  }
}

export default App;
