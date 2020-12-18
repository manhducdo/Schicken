import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Item from './FoodSlides';

import styles from '../index.less';

export default function FoodSlides({ title }) {

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <div className={styles.boxSwiper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        loop
        speed={1000}
        autoplay
        breakpoints={{
          576: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 1.5,
          },
          1200: {
            slidesPerView: 1.5,
          },
        }}
      >
      <SwiperSlide>
        <Item/>
      </SwiperSlide>
      <SwiperSlide>
        <Item/>
      </SwiperSlide>
      <SwiperSlide>
        <Item/>
      </SwiperSlide>

    </Swiper>
    </div>
  )
}
