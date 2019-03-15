import React from 'react';
import ip from './ip';

const SlideshowImg = ({image}) => (
  <div className="carousel-item">
    <img className="d-block" src={`http://${ip}:2999/images/${image.imgPath}`} alt={image.description}/>
  </div>
)

export default SlideshowImg;