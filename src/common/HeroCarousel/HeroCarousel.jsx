import React from 'react';
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import short from 'short-uuid';
import { VscArrowLeft as ArrowLeft, VscArrowRight as ArrowRight } from 'react-icons/vsc';
import useSwiperRef from '../../hooks/useSwiperRef';
import {
  CarouselWrapper,
  NavigationWrapper,
  NavigationButton,
} from './HeroCarousel.style';
import CarouselItem from './CarouselItem';
import { breakpoints } from '../../config/breakpoints';
import { isNotEmpty } from '../../util/isNotEmpty';
import files from '../../data/cms';

// Get top projects
const { topProjects, portfolio } = files;
const choosenProjects = topProjects[0].list;
const carouselSlides = portfolio.filter((i) => {
  return choosenProjects.includes(i.title);
});

// Install swiper navigation plugin
SwiperCore.use([Navigation, A11y]);

const responsiveBreakpoints = {
  // md
  0: {
    slidesPerView: 1,
  },

  [breakpoints.md]: {
    slidesPerView: 2,
    spaceBetween: 30,
  },

  // lg
  [breakpoints.lg]: {
    slidesPerView: 1,
  },
};

const swiperSettings = {
  loop: true,
  style: {
    width: '100%',
    height: 'auto',
  },
  breakpoints: responsiveBreakpoints,
};

const HeroCarousel = () => {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <CarouselWrapper>
      <Swiper
        {...swiperSettings}
        observer
        observeParents
        navigation={{
          prevEl,
          nextEl,
        }}
      >
        {
         isNotEmpty(carouselSlides) && carouselSlides.map((item) => (
           <SwiperSlide
             key={short.generate()}
             style={{
               height: 'auto',
             }}
           >
             <CarouselItem item={item} />
           </SwiperSlide>
         ))
        }
      </Swiper>
      <NavigationWrapper>
        {/* Prev */}
        <NavigationButton
          ref={prevElRef}
          aria-label="Previous Slide"
        >
          <ArrowLeft />
        </NavigationButton>

        {/* Next */}
        <NavigationButton
          ref={nextElRef}
          aria-label="Next Slide"
        >
          <ArrowRight />
        </NavigationButton>
      </NavigationWrapper>
    </CarouselWrapper>
  );
};

export default HeroCarousel;
