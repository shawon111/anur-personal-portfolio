import React from 'react';
import './TestimonialSlider.css';
import { A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialSlide from './TestimonialSlide/TestimonialSlide';
import profile1 from '../../../../images/testimony-img-1.jfif';
import profile2 from '../../../../images/testimony-img-2.jfif';
import profile3 from '../../../../images/testimony-img-3.jfif';

const TestimonialSlider = () => {
    const sliders = [
        {name: "david miller", position: 'Ceo & Founder', img: profile1, testimony: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised."},
        {name: "elizabeth anne", position: 'Fashion Designer', img: profile2, testimony: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised."},
        {name: "sara watson", position: 'UI/UX Designer', img: profile3, testimony: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised."}
    ]
    return (
        <div className='testimonial-sliders'>
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{ 
                    1024: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    320: {
                      slidesPerView: 1,
                    }
                  }}
            >
                {
                    sliders.map(slide => <SwiperSlide><TestimonialSlide
                    slide={slide}
                    key={slide.name}
                    /></SwiperSlide>)
                }    
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;