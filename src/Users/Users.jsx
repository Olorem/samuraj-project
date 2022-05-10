import UserItem from "./UserItem/UserItem"
import React from "react";

// {id: 0, follow: false, username: 'Eric Jonson', status: "just now", location: "USA, California"}

// const Users = ({ users, usersCount, follow, unfollow, setUsers }) => {
const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([
      {id: 0, follow: false, username: 'Eric Jonson', status: "AMAZING status text, its really great. Just very nice status :)", location: "USA, California"},
      {id: 1, follow: false, username: "Gigachad Based", status: "empty status pog pog", location: "Russia, Kremlin"}, 
      {id: 2, follow: false, username: "Pepe frog", status: "im a proud Billy Harrington lifer", location: "Heaven, Earth"}
    ]);
  }
  
  return (
    <div className="Users">
      { props.users.map( (u) => UserItem({...u, follow: props.follow, unfollow: props.unfollow}) ) }

    </div>
  )
}

export default Users;