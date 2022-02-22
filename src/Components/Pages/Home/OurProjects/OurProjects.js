import React from 'react';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './OurProjects.css';

import slide1 from '../../../../images/project-1.jpg';
import slide2 from '../../../../images/project-2.jpg';
import slide3 from '../../../../images/project-3.jpg';
import slide4 from '../../../../images/project-4.jpg';
import slide5 from '../../../../images/project-5.jpg';
import slide6 from '../../../../images/project-6.jpg';
import ProjectSlider from './ProjectSlider/ProjectSlider';

const OurProjects = () => {
    const projectSlides = [
        { img: slide1, title: 'Minimalistic room', slideNumber: '1', projectLink: "/" },
        { img: slide2, title: 'organic modeling', slideNumber: '2', projectLink: "/" },
        { img: slide3, title: 'the flower bomb', slideNumber: '3', projectLink: "/" },
        { img: slide4, title: 'Minimalism', slideNumber: '4', projectLink: "/" },
        { img: slide5, title: 'abstract art', slideNumber: '5', projectLink: "/" },
        { img: slide6, title: 'modern BG', slideNumber: '6', projectLink: "/" },
    ]
    return (
        <div className='our-projects-container'>
            <div className="our-project-heading">
                <div className="our-project-subtitle">
                    <h6>Portfolio</h6>
                </div>
                <div className="our-project-title">
                    <h3>Our Complete Projects</h3>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={60}
                speed={1000}
                slidesPerView={3}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                breakpoints={{ 
                    1024: {
                      slidesPerView: 3,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    320: {
                      slidesPerView: 1,
                    }
                  }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    projectSlides.map(singleSlide => <SwiperSlide>
                        <ProjectSlider
                            slide={singleSlide}
                            key={singleSlide.slideNumber}
                        ></ProjectSlider>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default OurProjects;