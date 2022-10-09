import { useState } from "react";
import styles from "./Post.module.css"
import {getRandomPic} from "./../../utils/getRandomPic.js";

const Post = (props) => {

  let [hidden, setHidden] = useState(true);

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userpic}>
          <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-small-37.jpg" alt="ava"/>
        </div>
        <div className={styles.description}>
          <div style={{ fontSize: '14px', fontWeight: 500}}><a href="#">{props.username}</a></div>
          <div style={{ fontSize: '14px',  color: "#444"}}>{props.timeAgo}</div>
        </div>
        <div className={styles.settings} onPointerEnter={() => { console.log(hidden); setHidden(false) }} onPointerLeave={() => { console.log(hidden); setHidden(true) }}>
          <span></span>
          <span></span>
          <span></span>

          <div className={styles.list + ' ' + (hidden ? styles.hidden : '')}>
            <div>Copy link</div>
            <div>Edit post</div>
            <div>Embed </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{props.postText}</div>
        <div className={styles.imgs}>
        <img src={getRandomPic(500, 300)} alt="banner" />
      </div>
        {/* <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/post/post-1.jpg" alt="banner" /> */}
      </div>
    </div>
  );
};

export default Post