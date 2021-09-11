import Post from "./Post/Post"
import styles from "./Profile.module.css"
import React from "react";

const Profile = (props) => {
  // const [post, setPost]

  const postAddHandler = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    let text = e.target[0].value;
    e.target[0].value = '';
    props.addPost({postText: text});
  }

  let inputRef = React.createRef();
  return (
  <div className={styles.profile}>
      <form 
        className={styles.form}
        onSubmit={postAddHandler}
      >
        <input 
          value={props.state.profilePage.inputTemp} 
          ref={inputRef}
          onChange={props.inputChangeHandler.bind(props)}
          className={styles.input}
          placeholder="I am a samuraj"
        />
        <button className="share">Share</button>
      </form>
      <div className={styles.posts}>
        {props.state.profilePage.postsD.map((p) => <Post username={p.username} timeAgo={p.timeAgo} postText={p.postText}/>)}
      </div>
  </div>
  );
}

export default Profile