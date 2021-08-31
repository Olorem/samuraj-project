import style from "./Message.module.css"

const Message = (props) => {
  return(
    <div className={style.message}>
      {props.user + ":" + props.content}
    </div>
  )
}

export default Message