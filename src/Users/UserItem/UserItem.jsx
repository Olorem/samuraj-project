import { NavLink } from 'react-router-dom';
import style from './UserItem.module.css'

// const UserItem = ({ id, username, status...}) => {
const UserItem = (props) => {
  
  let clickHandler = () => props.following ? props.unfollow(props.id) : props.follow(props.id);
  return(
    <div className={style.userItem} >
      <div className={style.userPicture}>
        {/* <div ><img alt="" /></div> */}
        <div><NavLink to="/profile"><img src="https://picsum.photos/70/70" alt="" /></NavLink></div>
        <div> <button onClick={clickHandler}>{props.following ? "Unfollow" : "Follow"}</button></div>
      </div>

      <div className={style.userDescription}>
        <div className={style.userInfo}>
          <div ><NavLink to="/profile"><b>{props.username}</b></NavLink></div>
          <div>{props.status}</div>
        </div>
        <div>{props.location}</div>
      </div>
      
    </div>
  )
}

export default UserItem