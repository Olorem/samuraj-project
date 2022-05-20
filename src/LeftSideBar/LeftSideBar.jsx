import { useState } from "react";
import style from "./LeftSideBar.module.css"
import defaultPic from "../assets/img/defaultUser.jpg";


const tempStyleForIcons = {color: "#dc4734", opacity: '0.8', width: '1.5rem', height: '1.3rem'};

const LeftSideBar = ({user}) => {

  const [currentData, setCurrentData] = useState('error');
  // setInterval(() => setCurrentData(new Date().toLocaleString()), 1000);

  return (
    <div className='left-side-bar'>
      <div className={style.card + " " + style.ava}>
        <div className={style.banner}>
          <a href="#"><img src="https://htmldemo.hasthemes.com/adda/adda/assets/images/banner/banner-small.jpg" alt="banner" srcSet="" /> </a>
        </div>
        <div className={style.description}>
          {/* <img className={style.profile} src="https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg" alt="pic" srcSet="" /> */}
          <img className={style.profile} src={(user.photos && user.photos.small) || defaultPic} alt="pic" srcSet="" />
          <div className={style.subtitle}> 
            <h6>{user.fullName}</h6>
            {/* <p>Any one can join with but Social network us if you want Any one can join with us if you want </p> */}
            <p>{user.aboutMe}</p>
        </div>
        </div>
      </div>
      <div className={style.card}>
        <h4>{user.fullName}</h4>
        {/* <div className={style.claster}>I Don’t know how? But i believe that it is possible one day if i stay with my dream all time</div> */}
        <div className={style.claster}>{user.lookingForAJobDescription}</div>
        <div className={style.claster} >
          <div><i className="fa fa-briefcase" style={tempStyleForIcons}></i> Web Developer</div>
          <div><i className="fa fa-home" style={tempStyleForIcons}></i> Melbourne, Australia</div>
          <div><i className="fa fa-location-dot" style={tempStyleForIcons}></i> Pulshar, Melbourne</div>
          <div><i className="fa fa-heart" style={tempStyleForIcons}></i> Travel, Swimming</div>
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
        
        { currentData }
      </div>
    </div>
  );
}

export default LeftSideBar