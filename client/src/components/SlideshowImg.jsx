import React from 'react';

const SlideshowImg = ({image}) => (
  <div className="carousel-item">
    <img className="d-block" src={`http://34.217.82.109:2999/images/${image.imgPath}`} alt={image.description}/>
  </div>
)

export default SlideshowImg;