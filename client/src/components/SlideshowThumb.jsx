import React from 'react';
import ip from './ip';

const SlideshowThumb = ({image, imgOrder, setLength, setCaption}) => (
  <li data-target="#carousel-custom" data-slide-to={image.imgOrder} className="thumbnail">
    <img src={`http://${ip}:2999/images/${image.imgPath}`} alt="image.description" className="img-responsive" onClick={() => {event.path[0].scrollIntoView({behavior: "smooth", inline: "center"}); setCaption()}}/>
    <p className="invisible-caption">{imgOrder + 1}/{setLength}: {image.description}</p>
  </li>
)

export default SlideshowThumb;