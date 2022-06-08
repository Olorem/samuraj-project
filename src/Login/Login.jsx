import React from "react";
import { Form, Field } from 'react-final-form'

const Login = (props) => (<div>
    <Form onSubmit={(smth) => console.log(smth)}>
    {function(props) {
      return (
        <form onSubmit={props.handleSubmit}>
          <h2>Login</h2>
          <div>
            <Field name="login" component="input" placeholder="login" />
          </div>

          <Field
            name="password"
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
  </div>)

export default Login