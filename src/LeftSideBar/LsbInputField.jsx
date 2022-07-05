import React, { useState } from "react";
import { Form, Field } from 'react-final-form'
import { required, maxSymbols } from "../utils/validators";


// const LeftSideBar = ({ user }) => {
export const LsbInputField = (props) => {
  console.log(props);
  return (
    <Form onSubmit={props.onSubmit} {...props}>
    {props => (
      <form onSubmit={props.handleSubmit}>

      <Field
        name="status"
        type="text"
        validate={required}
        render={({ input, meta }) => {
          console.log(props);
          return(
          <div>
            <input
              type="text"
              placeholder="status"
              autoFocus={true}
              value={props.val}
              onChange={props.change}
              onBlur={props.click}
              
            />
            {meta.touched && meta.error && <span>{meta.error}</span>}
            {console.log("META2", meta, input)}
          </div>
        )}}
      />
      </form>
    )}
    </Form>
)};
