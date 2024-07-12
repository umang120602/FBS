import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Ensure autoplay CSS is imported
import { Navigation, Autoplay } from 'swiper/modules';
import '../assets/CSS/SwiperComponent.scss'

export default function SwiperComponent() {
  return (
    <div 
      className="swiper-container"
      style={{
        border: '2px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <Swiper 
        navigation={true} 
        modules={[Navigation, Autoplay]} 
        className="mySwiper" 
        autoplay={{ delay: 10000, disableOnInteraction: false }} 
        style={{marginTop:125, marginBottom:200}}
      >
        <SwiperSlide >
          <div className='d-flex justify-content-around' >
            <div className='d-flex justify-content-center  flex-column'>
            <h1>Web Devlopment

            </h1> 
            <div className="row justify-content-center">
    <div className="col-lg-8">
        
    </div>
</div>


            </div>
            <img src='../images/SwiperSlider/WebDevlopmentSwiper.png'></img>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>HTML/CSS</h2>
            <p>Learn the basics of web development with HTML and CSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center'}}>
          <div>
            <h2>JavaScript</h2>
            <p>Master the art of JavaScript and take your web development skills to the next level</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>React</h2>
            <p>Build fast and efficient web applications with React</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>Node.js</h2>
            <p>Learn how to build fast and scalable server-side applications with Node.js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>Database</h2>
            <p>Learn how to store and manage data with databases</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>Security</h2>
            <p>Learn how to secure your web applications and protect user data</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>Deployment</h2>
            <p>Learn how to deploy your web applications to the cloud</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2>Get Started</h2>
            <p>Start building your web development skills today!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}