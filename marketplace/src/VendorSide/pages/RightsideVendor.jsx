import React, { useState } from "react";
import '../css/style.css';
import CarouselItem from "../hooks/CarouselItem";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import ListViewItem from "../hooks/ListItem";

const RightSideVendor = ({ data }) => {
    const [isVisibleGrid, setGridView] = useState(true);
    const [isVisibleListView, setListView] = useState(false);
    const itemsPerPage = 7;

    const items = data.length > 0 ? data : []; // Use the passed data
    const itemLength = items.length; // Length of the array

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const showGridView = () => {
        setGridView(true);
        setListView(false);
    };

    const showListView = () => {
        setGridView(false);
        setListView(true);
    };

    return (
        <div className='rightsideven'>
            <div className='navigationven'>
                Home / {data[0].category}
            </div>
            <div className='gridviewven'>
                <h5 className="pagetitleven">All Products ({itemLength} Products)</h5>
                <div className="boundaryven" />
                <div className="catandview">
                    <div className="catsuggestbox">
                        <p className="CatSuggestven">Construction</p> |
                        <p className="CatSuggestven">Personal Care & Beauty</p>  |
                    </div>
                    <div className="view-controls">
                        <span className="icon" onClick={showListView}>
                            <GiHamburgerMenu />
                        </span>
                        <span className="icon" onClick={showGridView}>
                            <IoGrid />
                        </span>
                    </div>
                </div>
                <div className="boundaryven" />
                {isVisibleGrid && (
                    <div className="carouselven">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                            autoPlaySpeed={2000}
                            autoPlay={true}
                            dotListClass="custom-dot-list-style"
                            showDots={true}
                        >
                            {items.map(item => (
                                <div key={item.id}>
                                    <CarouselItem items={item} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
            {isVisibleListView && (
                <div className='listviewven'>
                    {items.map(item => (
                        <ListViewItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RightSideVendor;
