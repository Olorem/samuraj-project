import UserItem from "./UserItem/UserItem"
import React from "react";
import style from "./Users.module.css"
import Preloader from "../Preloader/Preloader"
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Paginator from "./Paginator/Paginator";

let Users = (props) => {



  // if(!props.isAuth) return <Redirect to='/login'/>

  return (<>
      <LeftSideBar user={props.user} updateStatus={props.updateStatusThunk}/>

      <div className={style.users} >
        {/* { pages.map( (page) => 
            <button 
              className={page === props.currentPage && style.currentPage} 
              onClick={() => props.clickHandler(page)}>
                {page} 
            </button>)
        } */}
        <Paginator 
          totalCount={props.totalCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage} 
          clickHandler={props.clickHandler} 
        />
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