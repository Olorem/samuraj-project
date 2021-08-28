import style from "./Dialogs.module.css"

const Dialogs = () => {
  return(
    <div className={style.dialogs}>
      <div className={style.users}>
        <div className={style.user}>Sanya</div>
        <div className={style.user}>Vadim</div>
        <div className={style.user}>Oleg</div>
        <div className={style.user}>Tolik</div>
        <div className={style.user}>Naruto</div>
        <div className={style.user}>Kuplinov</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>lets go play some valorant</div>
        <div className={style.message}>ayooooooooo</div>
        <div className={style.message}>ill wait u in ts</div>
      </div>
    </div>
  );
}

export default Dialogs