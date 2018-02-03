import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../assets/img/img1.JPG';
import Img2 from '../assets/img/img2.JPG';
import Img3 from '../assets/img/img3.JPG';

const Slider = () => (
  <Carousel>
    <Carousel.Item>
      <img alt="900x500" src={Img1} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src={Img2} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src={Img3} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);

export default Slider;
