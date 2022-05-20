import { NavLink } from 'react-router-dom';
import { apiFollow, apiUnFollow } from '../../DAL/api';
import style from './UserItem.module.css'


// const UserItem = ({ id, username, status...}) => {
const UserItem = (props) => {
  
  let clickHandler = () => {
    props.setDisabled(true, props.id);

    if(props.following) {
      apiUnFollow(props.id).then(r => {
        props.setDisabled(false, props.id);
        r.resultCode === 0 ? props.unfollow(props.id) : console.log(r) 
      }); 
    } 
    else {
      apiFollow(props.id).then( r => {
        props.setDisabled(false, props.id);
        if(r.resultCode === 0)
          props.follow(props.id)
      })
    }
  }

  console.log(props)

  return(
    <div className={style.userItem} >
      <div className={style.userPicture}>
        {/* <div ><img alt="" /></div> */}

        <div><NavLink to={"/profile/" + props.id}><img src={props.smallPic || "https://picsum.photos/70/70"} 
          onLoad={() => props.setFetching(false)}
          alt="" /></NavLink></div>
        <div> <button disabled={props.isDisabled} onClick={clickHandler}>{props.following ? "Unfollow" : "Follow"}</button></div>
      </div>

      <div className={style.userDescription}>
        <div className={style.userInfo}>
          <div ><NavLink to={"/profile/" + props.id}><b>{props.username}</b></NavLink></div>
          <div>{props.status}</div>
        </div>
        <div className={style.location}>{props.location}</div>
      </div>
      
    </div>
  )
}

export default UserItem