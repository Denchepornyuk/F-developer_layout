import React from 'react';
import './banner.scss';

const Banner = () => (
  <section className="banner container">
    <img
      src="./images/banner-photo.jpg"
      alt="banner"
      className="banner__image"
    />

    <h1 className="banner__title">
      Frontend Developer
    </h1>

    <p className="banner__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Debitis, maiores veniam! Earum libero, voluptas rem deleniti
      accusantium minus sint obcaecati soluta. Eveniet nemo tempora,
      laborum tenetur error aut, labore ullam deserunt molestias voluptatibus
      odio, culpa vel.
    </p>

    <div className="banner__button">
      <a
        href="#sign_up"
        className="button"
      >
        Sing up now
      </a>
    </div>
  </section>
);

export default Banner;
