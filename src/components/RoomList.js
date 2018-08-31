import React, { Component } from 'react';





class RoomList extends Component {
  constructor(props) {
       super(props);

       this.state = {
       rooms: [],
       newRoomName: ' '
     };

     this.roomsRef = this.props.firebase.database().ref('Rooms');
     }


     componentDidMount(){
     this.roomsRef.on('child_added',snapshot =>{
        const room = snapshot.val();
        room.key= snapshot.key
        this.setState({ rooms: this.state.rooms.concat(room)});
      } )
     }

     createRoom(e){
       e.preventDefault();
       this.roomsRef.push({
         name:this.state.newRoomName
       });
       this.setState({newRoomName:' '});
     }

     handleChange(e) {
       this.setState({newRoomName: e.target.value });
     }



   render() {
      return (
        <div className= "rooms">


         <form onSubmit={(e)=>this.createRoom(e)}>
          <input type = "text" placeholder="Add new room" value={this.state.newRoomName} onChange={(e)=> this.handleChange(e)}/>
          <button className="adding_rooms_button">Add</button>
         </form>


         <section className= "room-list">
          {this.state.rooms.map((room, index)=>
           <div className="room_names" key={index} onClick ={() => this.props.setCurrentRoom(room)}>
               {room.name}
            </div>
            )}
          </section>
        </div>
         );
    }
}





 export default RoomList;
