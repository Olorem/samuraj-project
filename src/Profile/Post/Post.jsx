import styles from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-1.jpg" alt="ava"/>
        <div>{props.username}</div>
        <div>{props.timeAgo}</div>
      </div>
      <div>{props.postText}</div>
      <div className={styles.imgs}>
        <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/banner/profile-banner.jpg" alt="banner" />
      </div>
    </div>
  );
};

export default Post