import style from "./Message.module.css"

const Message = (props) => {
  return(
    <div className={style.message + ' ' + (props.user === 'Me' ? style.my: '')}>
      <span>
        {props.user }
      </span>
      <br></br>
      <span>
        {props.content}
      </span>
    </div>
  )
}

export default Message