import hero from '../assets/Krep-Konnect.png';
import heroleft from '../assets/2.png'
import heroright from '../assets/3.png'
import CarouselFade from './Carousel';

import { Link, useLoaderData } from 'react-router-dom';

export default function Home() {
  const trainers = useLoaderData()
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Krep Konnect</h1>
        <p>Your ultimate destination for sneaker enthusiasts</p>
      </header>
      <section className="hero-section">
        <img className="hero" src={heroleft} alt="Hero Banner" />
        <img className="hero" src={hero} alt="Hero Banner" />
        <img className="hero" src={heroright} alt="Hero Banner" />
      </section>
      <section className="featured-section">
      <br/>
        <br/>
        <br/>
        <h2>Latest Trainers</h2>
        
        <p>Discover the latest and hottest Krep in our collection.</p>
        <CarouselFade loaderData={trainers} />
        <br/>
        <br/>
        <br/>
      </section>
      <br />
      <section className="about-section">
        <br />
        <br />
        <h2>About Krep Konnect</h2>
        <div className='about-info'>
          <p>
          Krep Konnect is a community-driven platform where sneakerheads can
          buy, sell, and trade their favorite kreps. With a vast selection of
          kreps and a vibrant community, we aim to connect sneaker lovers
          from around the globe.
        </p>
        </div>
        
        <Link to='/trainers/'><button>Explore Now</button></Link>
        <br />
        <br />
        <br />
      </section>

    </div>
  );
}
