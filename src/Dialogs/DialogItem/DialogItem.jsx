import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'


const DialogItem = (props) => {
  return(
    <div className={style.dialogItem + ' ' + (props.id === 0 ? style.current : '')}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem