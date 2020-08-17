import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import Aboutus from "../layout/Aboutus";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:'absolute', width:'60px', background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  width:'60px', background: "blue", zIndex:'1' }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (

      <div className="container-fluid mt-5"
      style={{height:'550px', border: '1px solid black', textAlign:'center'}}>
        <h2>Posts de Destaque</h2>
        <Slider {...settings} style={{border: '1px solid black', padding: '50px 0 0 5px', 
          width:'87%', height: '450px', margin: 'auto'}}>
          <div>  
          <img src='./static/images/trending/1.jpg' />
            <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
          <div>
          <img src='./static/images/trending/1.jpg' />
          <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
          <div>
          <img src='./static/images/trending/1.jpg' />
          <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
          <div>
          <img src='./static/images/trending/1.jpg' />
          <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
          <div>
          <img src='./static/images/trending/1.jpg' />
          <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
          <div>
          <img src='./static/images/trending/1.jpg' />
          <h3>Title</h3>
            <h4>Written by</h4>
            <h5>Excerpt</h5>
            <h6>Button</h6>
          </div>
        </Slider>
      </div>
    );
  }
}

