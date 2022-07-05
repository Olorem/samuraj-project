import Post from "./Post/Post"
import styles from "./Profile.module.css"
import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
// import { useHistory } from "react-router-dom";
import { Form, Field } from 'react-final-form'

// import { addPostActionCreator, inputChangeActionCreator } from "../BLL/profileReducer";




const Profile = ({ inputTemp, inputChange, posts, addPost, user, match, updateStatusThunk }) => {
  // const Profile = (props) => {
  // const [post, setPost]

  // const history = useHistory();
  // console.log(match);

  const postAddHandler = (values) => {
    // e.preventDefault();
    addPost(values.tempPostText);
    values.tempPostText = "";
  }

  // const inputChangeHandler = (e) => {
  //   inputChange(e.target.value);
  // }
  // let inputRef = React.createRef();

  // if(!isAuth) return <Redirect to='/login'/>

  return (
    <>
      <LeftSideBar user={user} updateStatus={updateStatusThunk} />
      <div className={styles.profile}>
        <Form onSubmit={postAddHandler}>
          {(props) => (
            <form
              className={styles.formWrap}
              onSubmit={props.handleSubmit}
            >
              <img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-small-37.jpg" alt="profile" />
              <div className={styles.form}>

                <Field
                  component="input"
                  name="tempPostText"
                  type="text"
                  className={styles.input}
                  placeholder="I am a samuraj"
                />
                <button className="share">Share</button>
              </div>
            </form>
          )}
        </Form>
        <div className={styles.posts}>
          {posts.map((p) => <Post username={p.username} timeAgo={p.timeAgo} postText={p.postText} key={p.id} />)}
        </div>
      </div>
    </>
  );
}

export default Profile