import React from "react";
import { connect } from "react-redux";
import { authMeThunk } from "../BLL/authReducer";
import Header from "./Header";

class HeaderCon extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.authMeThunk();
    
  }
  render () {
    return(
      <Header isAuthorized={this.props.isAuthorized}/>
    )
  };
}

export default connect((state) => ({ isAuthorized: state.authReducer.isAuthorized }), { authMeThunk })(HeaderCon);