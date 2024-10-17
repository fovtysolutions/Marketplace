import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation } from 'swiper/modules'; // Import Navigation module
import '../css/style.css';
import LeftArrow from '../assets/left-arrow-svgrepo-com.svg'; // Adjust the path as necessary
import RightArrow from '../assets/right-arrow-svgrepo-com.svg'; // Adjust the path as necessary

const CategorySwiper = ({ allcategories, changeCategory }) => {
    return (
        <Swiper
            centeredSlides={true}
            spaceBetween={10} // Space between slides
            slidesPerView={5} // Number of slides to show at once
            navigation={{
                prevEl: '.swiper-button-prevn',
                nextEl: '.swiper-button-nextn',
            }}
            modules={[Navigation]} // Include Navigation module
        >
            {allcategories.map((item) => (
                <SwiperSlide key={item}>
                    <p
                        className="CatSuggestven"
                        onClick={() => changeCategory(item)} // Use a function to prevent immediate invocation
                    >
                        {item}
                    </p>
                </SwiperSlide>
            ))}

            {/* Navigation buttons with SVG icons */}
            <div className="swiper-button-prevn">
                <img src={LeftArrow} alt="Previous" style={{ width: '20px', height: '20px' }} />
            </div>
            <div className="swiper-button-nextn">
                <img src={RightArrow} alt="Next" style={{ width: '20px', height: '20px' }} />
            </div>
        </Swiper>
    );
};

export default CategorySwiper;
