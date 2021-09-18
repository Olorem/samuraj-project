import styles from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div>
          <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-1.jpg" alt="ava"/>
        </div>
        <div>
          <div>{props.username}</div>
          <div>{props.timeAgo}</div>
        </div>
      </div>
      <div className={styles.text}>{props.postText}</div>
      <div className={styles.imgs}>
        <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/post/post-1.jpg" alt="banner" />
      </div>
    </div>
  );
};

export default Post