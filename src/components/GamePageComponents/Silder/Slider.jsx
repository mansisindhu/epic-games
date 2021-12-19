import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

const Slider = ({ data }) => {
  return (
    <Carousel autoPlay showStatus={false} stopOnHover={false}>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <img alt={`slider${i + 1}`} src={el} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
