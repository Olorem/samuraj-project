import Post from "./Post/Post"
import styles from "./Profile.module.css"

const Profile = () => {
  return (
  <div className={styles.profile}>
      <div className="postingForm">
        <input type="text" />
        <button className="share">Share</button>
      </div>
      <div> my posts
        <Post username="Eric Jonson" timeAgo="35 min ago" postText="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"/>
        <Post username="Touka Kirishima" timeAgo="just now" postText="I wanna be the Boshi"/>
        <Post />
      </div>
  </div>
  );
}

export default Profile