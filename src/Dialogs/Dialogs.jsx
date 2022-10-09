
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { Form, Field } from 'react-final-form'
import { maxSymbols10 } from "../utils/validators";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];



const Dialogs = ({ dialogs, addMessage, inputTemp, inputChange, user, isAuth, updateStatusThunk }) => {
  // let textRef = React.createRef();

  function submitHandler(values) {
    console.log(values);
    // e.preventDefault();
    // // console.log(textRef.current.value);
    // console.log(e.target[0].value);
    addMessage("Me", values.tempMessage, 0);
  }


  // function textChangeHandler(e) {
  //   inputChange(e.target.value);

  // }

  // if(!isAuth) return <Redirect to='/login'/>

  return (<>
    <LeftSideBar user={user} updateStatus={updateStatusThunk} />

    <div className={style.dialogs}>

      <div className={style.users}>
        {dialogs.map((item, index) => <DialogItem name={item.name} id={index} />)}
      </div>
      <div className={style.messages}>
        {dialogs[0].messages.map((m) => <Message content={m.content} user={m.user} />)}

        <Form onSubmit={submitHandler}>
          {props => (
            <form onSubmit={props.handleSubmit} >

              <Field
                name="tempMessage"
                type="text"
                validate={maxSymbols10}
                render={({ input, meta }) =>
                (<>
                  <input
                    {...input}
                    
                  />
                  {console.log("META",meta, input)}
                  {meta.touched && meta.error && <div style={{position: "absolute"}}>{meta.error}</div>}
                  </>)
                }
              />
              <button type="submit" >GG EZZ</button>

            </form>
          )}
        </Form>


      </div>
    </div></>
  );
}

export default Dialogs