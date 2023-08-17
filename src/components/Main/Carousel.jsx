import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carous } from 'react-responsive-carousel';

const Carousel = ({ PROXY }) => {
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        axios.get(`${PROXY}/api/carousel`)
            .then((res) => {
                if (Array.isArray(res.data.products)) {
                    console.log(res.data.products);

                    setCarousel(res.data.products);
                } else {
                    console.error("Carousel data is not an array:", res.data);
                }
            })
            .catch((err) => console.log(err))
    }, []);
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }

    const indicatorStyles = {
        backgroundColor: "rgba(255,255,255,0.4)",
        border: "0.2px solid #929292",
        width: "8px",
        height: "8px",
        borderRadius: "4px",
        display: "inline-block",
        margin: "0 3px",
    };

    return (
        <Carous showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
            stopOnHover={true}
            interval="5000"
            transitionTime={500}
            showStatus={false}
            onChange={handleChange}
            selectedItem={carousel[currentIndex]}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ ...indicatorStyles, backgroundColor: 'white' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            {carousel.map((item, index) => (
                <img style={{objectFit: "cover", height:"230px"}} src={item.imgUrl} key={index} alt={`Slide ${index}`} />
            ))}
        </Carous>
    );
}

export default Carousel;