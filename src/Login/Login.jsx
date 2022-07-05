import React from "react";
import { Form, Field } from 'react-final-form'
import { loginThunk, logoutThunk } from "../BLL/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";

// class LoginContainer extends React.Component {
//   login(mail, pass, r) {

//   }
  
//   componentDidMount() {
//     console.log("DID MOUNT");
//   }
//   render () {
//     return <Login {...this.props}/>
//   };
// }

const Login = function(props) {
  console.log("Login", props);
  return (<div>
    {!props.isAuth ? 
    <Form onSubmit={function(data) {
      props.loginThunk(data.login, data.password, data.remember || false);
      }}>
    {function(props) {
      // console.log(props.values);
      return (
        <form onSubmit={props.handleSubmit}>
          <h2>Login</h2>
          <div>
            <Field name="login" component="input" placeholder="login" />
          </div>

          <Field
            name="password"
            type="password"
            render={({ input, meta }) => (
              <div>
                <input type="text" {...input} placeholder="password"/>
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <div>
            <Field name="remember" component="input" type="checkbox" />
            Remember me
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}}
    </Form>
    :
    <button onClick={e => props.logoutThunk() }>Logout</button> }
  </div>)
}

// const LoginWithWrap = compose(
//   connect(state => ({isAuth: state.authReducer.isAuthorized}), {loginThunk}),
// )(Login);

export default connect(state => ({isAuth: state.authReducer.isAuthorized}), {loginThunk, logoutThunk})(Login)