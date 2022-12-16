import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product";
import data from '../data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import axios from "axios"; 
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      product: []
    };
    // console.log("??????????",data.product)
  }
  
  componentDidMount() {
    axios.get("http://localhost:3000/product")
      .then(res => res.data)
      .then(
        (result) => {
          console.log("????????????",result);
          this.setState({
            isLoaded: true,
            product: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      Default: '50px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive Product Carousel</h2>
        <Slider {...settings}>
          {this.state.product.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.imagelink}  data={slide}/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
