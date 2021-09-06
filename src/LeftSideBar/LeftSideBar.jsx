import style from "./LeftSideBar.module.css"

const LeftSideBar = () => {
  return (
    <div className='left-side-bar'>
      <div className={style.card}>
        Ava + desc
      </div>
      <div className={style.card}>
        <h4>Erik Jhonson</h4>
        <div className={style.claster}>I Don’t know how? But i believe that it is possible one day if i stay with my dream all time</div>
        <div className={style.claster}>
          <i className="bi bi-office-bag"></i><div>Web Developer</div>
          <div>Melbourne, Australia</div>
          <div>Pulshar, Melbourne</div>
          <div>Travel, Swimming</div>
        </div>
      </div>
      <div className={style.card}>
        <h4>Sweets Memories</h4>
        { setInterval(() => new Date().toLocaleString(), 1000) }
      </div>
      <div className={style.card}>
        <h4>Page You May Like</h4>
      </div>
    </div>
  );
}

export default LeftSideBar