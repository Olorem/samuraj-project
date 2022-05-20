import React from "react";
import { connect } from "react-redux";
import { setAuthUsersData } from "../BLL/authReducer";
import { apiAuthMe } from "../DAL/api";
import Header from "./Header";

class HeaderCon extends React.Component {
  componentDidMount() {
      apiAuthMe()
      .then( (r) => {
        
        if(r.resultCode === 0) {
          console.log(r);
          this.props.setAuthUsersData(r.data.email, r.data.id, r.data.login);
        }
        else throw console.error("response result is not 0");
      });
    console.log(this.props);
  }
  render () {
    return(
      <Header isAuthorized={this.props.isAuthorized}/>
    )
  };
}

export default connect((state) => ({ isAuthorized: state.authReducer.isAuthorized }), { setAuthUsersData })(HeaderCon);