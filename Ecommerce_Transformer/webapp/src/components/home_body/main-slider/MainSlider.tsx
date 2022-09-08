// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './MainSlider.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

const MainSlider = () => {
    return (
        <div className="mainSlider">
            <div className="grid wide">
                <div className="mainSlider_container">
                    <Swiper
                        initialSlide={4}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/sub_decepticons/shockwave_intro.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/sub_decepticons/thefallen.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/starscream/4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/megatron/1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/Optimus/7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/Bumblebee/intro2.webp" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/Sentinel/intro2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/sub_autubots/cogman_intro.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/sub_autubots/drift_intro2.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;
