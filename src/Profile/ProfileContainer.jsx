import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";
import Profile from "./Profile";
import { connect } from "react-redux";

// const ProfileContainer = () => {
//   // const [post, setPost]
  
//   return (
//       <storeContext.Consumer>
//         { store => {
          
//           const postAdd = (text) => {
//             store.dispatch( addPostActionCreator(text) );
//           }
        
//           const inputChange = (text) => {
//             store.dispatch( inputChangeActionCreator(text) )
//           }

//           return <Profile inputChange={inputChange} inputTemp={store.getState().profilePage.inputTemp} posts={store.getState().profilePage.postsD} postAdd={postAdd}/> 
          
//           }
//         }
       
//       </storeContext.Consumer>
//   );
// }

let mapStateToProps = (state) => ({
  inputTemp: state.profilePage.inputTemp,
  posts: state.profilePage.postsD
});

let mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => {
    dispatch( inputChangeActionCreator(text) );
  },
  postAdd: (text) => {
    dispatch( addPostActionCreator(text) );
  }
});

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile); 

export default ProfileContainer