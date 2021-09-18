
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from "react";
import { addMessageActionCreator, textChangeActionCreator } from "../BLL/store";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];




const Dialogs = ({ dialogsPage, dispatch }) => {
  let textRef = React.createRef();

  function submitHandler(e) {
    e.preventDefault();
    console.log(textRef.current.value);
    dispatch(addMessageActionCreator("Me", textRef.current.value, 0))
  }

  function textChangeHandler(e) {
    dispatch( textChangeActionCreator(e) );
  }

  return(
    <div className={style.dialogs}>
      <div className={style.users}>
        { dialogsPage.dialogs.map((item, index) => <DialogItem name={item.name} id={index} />)}
      </div>
      <div className={style.messages}>
        { dialogsPage.dialogs[0].messages.map((m) => <Message content={m.content} user={m.user}/>) }
        <form onSubmit={ submitHandler }>
          <input 
          ref={textRef} 
          value={dialogsPage.inputTemp}
          onChange={ textChangeHandler } ></input>
          <button type="submit" >GG EZZ</button>
        </form>
        
      </div>
    </div>
  );
}

export default Dialogs