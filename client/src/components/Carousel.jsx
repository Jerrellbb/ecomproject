import Carousel from 'react-bootstrap/Carousel';

/* eslint-disable react/prop-types */
export default function CarouselFade({ loaderData }) {

  return (
    <div className='carousel'>
      <Carousel fade data-bs-theme="dark">
        {loaderData.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img src={item.image_1} alt={item.name} className="carousel-image" />
            </div>
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.brand.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

  )
}

