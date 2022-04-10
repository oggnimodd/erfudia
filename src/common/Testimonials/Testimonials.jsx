import React from 'react';
import SwiperCore, {
  Navigation, A11y, Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import short from 'short-uuid';
import {
  TestimonialsWrapper,
  CarouselWrapper,
  BulletWrapper,
} from './Testimonials.style';
import CarouselItem from './CarouselItem';
import { isNotEmpty } from '../../util/isNotEmpty';
import { testimonials } from '../../data/testimonials';
import useSwiperRef from '../../hooks/useSwiperRef';

// Install swiper navigation plugin
SwiperCore.use([Navigation, A11y, Pagination]);

const swiperSettings = {
  loop: true,
  style: {
    width: '100%',
    height: 'auto',
  },
};

const Testimonials = () => {
  const [paginationEl, paginationRef] = useSwiperRef();

  return (
    <TestimonialsWrapper>
      <CarouselWrapper>
        <Swiper
          pagination={{
            el: paginationEl,
            clickable: true,
          }}
          {...swiperSettings}
        >
          {
            isNotEmpty(testimonials) && testimonials.map((item) => {
              return (
                <SwiperSlide key={short.generate()}>
                  <CarouselItem item={item} />
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </CarouselWrapper>
      <BulletWrapper ref={paginationRef} />
    </TestimonialsWrapper>
  );
};

export default Testimonials;
