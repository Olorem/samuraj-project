import Post from "./Post/Post"
import styles from "./Profile.module.css"
import { useState } from "react";

const Profile = (props) => {

  // const [post, setPost]

  return (
  <div className={styles.profile}>
      <form className="postingForm">
        <input type="text" />
        <button className="share">Share</button>
      </form>
      <div className={styles.posts}>
        {props.postsD.map((p) => <Post username={p.username} timeAgo={p.timeAgo} postText={p.postText}/>)}
      </div>
  </div>
  );
}

export default Profile