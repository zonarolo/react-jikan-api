import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss';

export function CarouselHome(props) {
  return (
    <Carousel showThumbs={false}>
      {props.trending.map((item, index) => {
        return <div key={index}>
          {item.attributes.coverImage && item.attributes.coverImage.original && <img src={item.attributes.coverImage.original} alt={item.canonicalTitle} />}
          <a href={"https://kitsu.io/anime/" + item.id}>{item.attributes.canonicalTitle && <p>{item.attributes.canonicalTitle}</p>}</a>
        </div>
      }) }

    </Carousel>
  );
}
