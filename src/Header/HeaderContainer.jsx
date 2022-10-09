import React from "react";
import { connect } from "react-redux";
import { authMeThunk } from "../BLL/authReducer";
import Header from "./Header";

const HeaderContainer = props =>
  (<Header isAuthorized={props.isAuthorized}/>)

export default connect((state) => ({ isAuthorized: state.authReducer.isAuthorized }), { authMeThunk })(HeaderContainer);

// this.props.authMeThunk();
