
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from "react";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];




const Dialogs = ({ dialogs, addMessage, inputTemp, inputChange }) => {
  // let textRef = React.createRef();

  function submitHandler(e) {
    
    e.preventDefault();
    // console.log(textRef.current.value);
    console.log(e.target[0].value);
    addMessage("Me", e.target[0].value, 0);
  }

  function textChangeHandler(e) {
    inputChange(e.target.value);
  }

  return(
    <div className={style.dialogs}>
      <div className={style.users}>
        { dialogs.map((item, index) => <DialogItem name={item.name} id={index} />)}
      </div>
      <div className={style.messages}>
        { dialogs[0].messages.map((m) => <Message content={m.content} user={m.user}/>) }
        <form onSubmit={ submitHandler }>
          <input 
          value={inputTemp}
          onChange={ textChangeHandler } ></input>
          <button type="submit" >GG EZZ</button>
        </form>
        
      </div>
    </div>
  );
}

export default Dialogs