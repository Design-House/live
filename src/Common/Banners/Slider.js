import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import clients1 from "../../images/Clients/clients-1.jpg";
import clients2 from "../../images/Clients/clients-2.jpg";

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item> <img src={clients1} className="d-block w-100" alt="..." /> </Carousel.Item>
      <Carousel.Item> <img src={clients2} className="d-block w-100" alt="..." /> </Carousel.Item>
      <Carousel.Item> <img src={clients1} className="d-block w-100" alt="..." /> </Carousel.Item>
  </Carousel>
  )
}

export default Slider