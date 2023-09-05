import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import first from './1.jpeg';
import second from './2.jpeg';
import third from './3.jpeg';


function CarouselComponent() {
  return (
    <Carousel showStatus={false} showIndicators={false} interval={5000} showThumbs={false}>
      <div>
        <img src={first} alt="Image 1" height={600} width={300} />
      </div>
      <div>
        <img src={second} alt="Image 2" height={600} width={300}/>
      </div>
      <div>
        <img src={third} alt="Image 1"height={600} width={300} />
      </div>
      {/* Add more images */}
    </Carousel>
  );
}

export default CarouselComponent;
