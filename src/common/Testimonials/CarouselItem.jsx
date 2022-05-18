import React from 'react';
import {
  TestimonialText,
  TestimonialName,
  TestimonialCompany,
  CarouseItem,
} from './Testimonials.style';

const CarouselItem = ({ item }) => {
  const { testimonial, name, company } = item;

  return (
    <CarouseItem>
      <TestimonialText>{testimonial}</TestimonialText>
      <TestimonialName>{name}</TestimonialName>
      <TestimonialCompany>{company}</TestimonialCompany>
    </CarouseItem>
  );
};

export default CarouselItem;
