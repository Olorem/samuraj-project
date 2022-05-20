import Post from "./Post/Post"
import styles from "./Profile.module.css"
import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { useHistory } from "react-router-dom";

// import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";

  


const Profile = ({ inputTemp, inputChange, posts, addPost, user, match }) => {
// const Profile = (props) => {
  // const [post, setPost]

  // const history = useHistory();
  console.log(match);

  const postAddHandler = (e) => {
    e.preventDefault();
    addPost(e.target[0].value);
  }

  const inputChangeHandler = (e) => {
    inputChange(e.target.value);
  }
  // let inputRef = React.createRef();



  return (
  <>
    <LeftSideBar user={user}/>
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
  </>
  );
}

export default Profile