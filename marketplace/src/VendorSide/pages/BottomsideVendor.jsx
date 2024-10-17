import React from "react";
import '../css/style.css';
import CarouselItem from "../hooks/CarouselItem";
import Carousel from 'react-multi-carousel';
import SampleData from "../data/SampleData.json";

const BottomsideVendor = () => {

    const items = SampleData; // Ensure it's an array
    const itemslength = items.length; // Length of Array

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='bottomsideven'>
                <div className="carouselven-bottom">
                    <h3 style={{ textAlign:'left'}}>You May Also Like</h3>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                            autoPlaySpeed={2000}
                            autoPlay={true}
                        >
                            {items.map(item => (
                                <div key={item.id}><CarouselItem items={item} /></div>
                            ))}
                        </Carousel>
                    </div>
            </div>
        </>
    )
}

export default BottomsideVendor