import React from 'react';
import './about.scss';

const AboutMe = () => (
  <section
    className="about container"
    id="about"
  >
    <h1 className="about__title">
      Let&apos;s get acquainted
    </h1>
    <div className="about__content">
      <img
        src="./images/man-laptop-v1.svg"
        alt="Man with laptop"
        className="about__image"
      />
      <div className="about__description">
        <h2 className="description__title">
          I am cool frontend developer
        </h2>
        <p className="description__text">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias accusantium quasi corporis? Esse
          obcaecati porro aliquid cupiditate, libero sed ab.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias accusantium quasi corporis? Esse
          obcaecati porro aliquid cupiditate, libero sed ab.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="description__link">
          <a
            href="#sign_up"
            className="about__link"
          >
            Sing up now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
