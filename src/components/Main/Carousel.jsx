import react from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Main/Carousel.css"

const Carousel = () => {
    const settings = {
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
                <div className='Carousel'>
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
                <div className='Carousel'>
                    <img src='./img/imgMain/tomato.png' alt='토마토'></img>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;