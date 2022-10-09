import path from ".././assets/img/1484.gif";
import style from "./Preloader.module.css";


let Preloader = (props) => {
  return (
    <div className={style.preloader}>
      <img src={path} alt="preloader" />
      <div>LOADING</div>
    </div>
  )
}

export default Preloader;