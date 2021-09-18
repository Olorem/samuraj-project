import style from "./LeftSideBar.module.css"

const LeftSideBar = () => {
  return (
    <div className='left-side-bar'>
      <div className={style.card + " " + style.ava}>
        <div className={style.banner}>
          <a href="#"><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/banner/banner-small.jpg" alt="banner" srcset="" /> </a>
        </div>
        <div className={style.description}>
          <img className={style.profile} src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg" alt="pic" srcset="" />
          <div className={style.subtitle}> 
            <h6>Eric Jhonson</h6>
            <p>Any one can join with but Social network us if you want Any one can join with us if you want </p>
        </div>
        </div>
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
        <h4>Sweet Memories</h4>
          <div className={style.memories}>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-1.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-2.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-3.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-4.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-5.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-6.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-7.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-8.jpg" alt="memory" /></div>
            <div><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/gallery/gallery-9.jpg" alt="memory" /></div>
          </div>
        
      </div>
      <div className={style.card}>
        <h4>Page You May Like</h4>
        { setInterval(() => new Date().toLocaleString(), 1000) }
      </div>
    </div>
  );
}

export default LeftSideBar