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
            follow: props.follow, 
            unfollow: props.unfollow, 
            key: u.id,
            setFetching: props.setFetching,
            isDisabled: props.buttonsInProgress.includes(u.id),
            setDisabled: props.setDisabled,
          }) 
        )}
        {/* <button>GET MORE</button> */}
      </div></>
    )
}

export default Users;