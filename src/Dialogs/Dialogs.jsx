
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];




const Dialogs = (props) => {
  return(
    <div className={style.dialogs}>
      <div className={style.users}>
        { props.usersD.map((u) => <DialogItem name={u.name} id={u.id} />)}
      </div>
      <div className={style.messages}>
        {props.messagesD.map((m) => <Message content={m.content} user={m.user}/>)}
      </div>
    </div>
  );
}

export default Dialogs