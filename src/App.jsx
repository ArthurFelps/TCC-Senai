import { BrowserRouter } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

    const slide_img = [
      "./imagens/slide1.webp",
      "./imagens/slide2.webp",
      "./imagens/slide3.webp",
 
    ];
    
    const App = () => {
      return (
        <div className="main-swiper">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 10000  ,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            {/* using array */}
            {slide_img.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={img} alt="" />
                </SwiperSlide>
              );
            })}

          </Swiper>
        </div>
   
          
  )
}

export default App;