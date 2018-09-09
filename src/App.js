import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User';
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
         activeRoom :'',
         currentUser: '',
      }
      this.setCurrentRoom = this.setCurrentRoom.bind(this);
      this.setUser = this.setUser.bind(this);
    }
    setCurrentRoom(room){
      console.log(room);
        this.setState({activeRoom: room})
    }

    setUser(user){
        this.setState({currentUser:user})
    }
    
  render() {
    return (
      <div className="App">
       <div className="sidebar">
         <header>
          <h1>Bloc Chats</h1>
         </header>
          <div className="user_info">
            <User
             firebase={firebase}
             user= {this.state.currentUser}
             setUser={this.setUser}
            />
          </div>
          <div className="room_info">
            <RoomList
              firebase={firebase}
              activeRoom = {this.state.activeRoom}
              setCurrentRoom= {this.setCurrentRoom}
           />
          </div>
         </div>
         <div className="message_info">
           <MessageList
             firebase={firebase}
             user={this.state.currentUser}
             setUser={this.setUser}
             activeRoom= {this.state.activeRoom }
            />


        </div>
      </div>
    );
  }
}

export default App;
