import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Main/Carousel.css"

const Carousel = ({ PROXY }) => {
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        axios.get(`${PROXY}/api/products/carousel`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setCarousel(res.data);
                } else {
                    console.error("Carousel data is not an array:", res.data);
                }
            })
            .catch((err) => console.log(err))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='Carousel_container'>
            <Slider {...settings}>
                {carousel.map((item, index) => (
                    <div className='Carousel' key={index}>
                        <img src={item.img_url} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;