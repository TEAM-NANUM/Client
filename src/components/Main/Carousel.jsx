import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carous } from "react-responsive-carousel";

const Carousel = ({ PROXY }) => {
  const navigate = useNavigate();
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/carousel`)
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          console.log(res.data.products);
          setCarousel(res.data.products);
        } else {
          console.error("Carousel data is not an array:", res.data);
        }
      })
      .catch((err) => console.log(err));
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
    <Carous
      showArrows={false}
      onClickItem={(idx) => {
        window.location.replace(carousel[idx].hyperLink);
      }}
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
      renderIndicator={(isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, backgroundColor: "white" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            style={{
              ...indicatorStyles,
              cursor: carousel[index].hyperLink ? "pointer" : "default",
            }} // Change cursor style
          />
        );
      }}
    >
      {carousel.map((item, index) => (
        <div
          key={index}
          style={{ cursor: item.hyperLink ? "pointer" : "default" }} // Change cursor style
        >
          <img
            style={{
              objectFit: "cover",
              height: "230px",
              cursor: item.hyperLink ? "pointer" : "default",
            }} // Add cursor style to the image
            src={item.imgUrl}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Carous>
  );
};

export default Carousel;
