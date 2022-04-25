import Post from "./Post/Post"
import styles from "./Profile.module.css"
import React from "react";
import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";

  


const Profile = ({ profilePage, dispatch }) => {
  // const [post, setPost]

  const postAddHandler = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    let text = e.target[0].value;
    e.target[0].value = '';
    dispatch( addPostActionCreator(text) );
  }

  const inputChange = (e) => {
    dispatch( inputChangeActionCreator(e) )
  }

  let inputRef = React.createRef();
  return (
  <div className={styles.profile}>
      
      <form 
        className={styles.formWrap}
        onSubmit={postAddHandler}
      >
        <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-small-37.jpg" alt="profile" />
        <div className={styles.form}>
          <input
            value={profilePage.inputTemp} 
            ref={inputRef}
            onChange={ inputChange }
            className={styles.input}
            placeholder="I am a samuraj"
          />
          <button className="share">Share</button>
        </div>
      </form>
      <div className={styles.posts}>
        {profilePage.postsD.map((p) => <Post username={p.username} timeAgo={p.timeAgo} postText={p.postText}/>)}
      </div>
  </div>
  );
}

export default Profile