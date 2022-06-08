import UserItem from "./UserItem/UserItem"
import React from "react";
import style from "./Users.module.css"
import Preloader from "../Preloader/Preloader"
import LeftSideBar from "../LeftSideBar/LeftSideBar";

let Users = (props) => {



  let pages = new Array(Math.ceil(props.totalCount / props.pageSize));
  for(let i = 1; i <= pages.length && i <= 10; i++){
    pages[i] = i;
  }

  // if(!props.isAuth) return <Redirect to='/login'/>

  return (<>
      <LeftSideBar user={props.user}/>

      <div className={style.users} >
        { pages.map( (page) => 
            <button 
              className={page === props.currentPage && style.currentPage} 
              onClick={() => props.clickHandler(page)}>
                {page} 
            </button>)
        }
        {props.isFetching && <Preloader />}
        { props.users.map( (u) => 
          UserItem({
            ...u, 
            key: u.id,
            setFetching: props.setFetching,
            isDisabled: props.buttonsInProgress.includes(u.id),
            followThunkCreator: props.followThunkCreator,
            unFollowThunkCreator: props.unFollowThunkCreator
          }) 
        )}
        {/* <button>GET MORE</button> */}
      </div></>
    )
}

export default Users;