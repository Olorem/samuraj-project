
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




const Dialogs = (props) => {
  let textRef = React.createRef();

  function clickHandler(e) {
    // e.preventDefault();
    alert(textRef.current.value);
    // console.log(e)
    e.target.innerHTML = '00';
  }

  function submHandler(e) {
    e.preventDefault();
    console.log(this);
    
  }

  return(
    <div className={style.dialogs}>
      <div className={style.users}>
        { props.usersD.map((u) => <DialogItem name={u.name} id={u.id} />)}
      </div>
      <div className={style.messages}>
        {props.messagesD.map((m) => <Message content={m.content} user={m.user}/>)}
        <form onSubmit={ submHandler }>
          <textarea ref={textRef}></textarea>
          <button type="submit" onClick={ clickHandler }>GG EZZ</button>
        </form>
        
      </div>
    </div>
  );
}

export default Dialogs