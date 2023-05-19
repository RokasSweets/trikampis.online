import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/Carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="main-carousel col-12 col-lg-8 m-auto">
        <Slider {...settings}>
          <div className="first slide">
            <h1 className="slide-title">Sveiki atvykę!</h1>
            <p>
              Sveikinu atradus slapčiausią konspiracijos ir sąmokslo teorijų
              svetainę!
            </p>
          </div>
          <div className="second slide">
            <h1 className="slide-title">Ką čia galiu rasti?</h1>
            <p>blablabla</p>
          </div>
        </Slider>
      </div>
    );
  }
}
