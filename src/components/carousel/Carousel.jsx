import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';

function Carousel({ items, carouselId }) {
  return (
    <div id={carouselId} className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
            <CarouselItem item={item} />
            <h5 className='caption'>{item.name}</h5>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${carouselId}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
