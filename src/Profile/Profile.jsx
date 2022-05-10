import Post from "./Post/Post"
import styles from "./Profile.module.css"
import React from "react";
// import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";

  


const Profile = ({ inputTemp, inputChange, posts, postAdd }) => {
  // const [post, setPost]

  const postAddHandler = (e) => {
    e.preventDefault();
    postAdd(e.target[0].value);
  }

  const inputChangeHandler = (e) => {
    inputChange(e.target.value);
  }
  // let inputRef = React.createRef();



  return (
  <div className={styles.profile}>
      
      <form 
        className={styles.formWrap}
        onSubmit={postAddHandler}
      >
        <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-small-37.jpg" alt="profile" />
        <div className={styles.form}>
          <input
            value={inputTemp} 
            onChange={ inputChangeHandler }
            className={styles.input}
            placeholder="I am a samuraj"
          />
          <button className="share">Share</button>
        </div>
      </form>
      <div className={styles.posts}>
        {posts.map((p) => <Post username={p.username} timeAgo={p.timeAgo} postText={p.postText} key={p.id}/>)}
      </div>
  </div>
  );
}

export default Profile