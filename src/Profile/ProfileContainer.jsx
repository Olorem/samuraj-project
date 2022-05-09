import React from "react";
import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";
import storeContext from "../storeContext";
import Profile from "./Profile";


const ProfileContainer = () => {
  // const [post, setPost]
  
  return (
      <storeContext.Consumer>
        { store => {
          
          const postAdd = (text) => {
            store.dispatch( addPostActionCreator(text) );
          }
        
          const inputChange = (text) => {
            store.dispatch( inputChangeActionCreator(text) )
          }

          return <Profile inputChange={inputChange} inputTemp={store.getState().profilePage.inputTemp} posts={store.getState().profilePage.postsD} postAdd={postAdd}/> 
          
          }
        }
       
      </storeContext.Consumer>
  );
}

export default ProfileContainer