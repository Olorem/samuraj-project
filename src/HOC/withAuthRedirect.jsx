import React from "react";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (Component) => {
  let Wrapper = (props) => {
    // console.log(Component);
    if(!props.isAuth) 
      return <Redirect to='/login'/>
    else 
      return <Component {...props}/>
  }
  return Wrapper;
}

export default withAuthRedirect;