import React from 'react';
import './header.scss';

const Header = () => {
  const menuLinks = {
    'About me': 'about',
    Relationships: 'relationships',
    Requirements: 'requirements',
    Users: 'users',
    'Sign Up': 'sign_up',
  };

  const menuLinksMobile = {
    'About me': 'about',
    Relationships: 'relationships',
    Users: 'users',
    'Sign Up': 'sign_up',
    'Terms and Conditions': 'terms_conditions',
    'How it works': 'how_works',
    Partnership: 'partnership',
    Help: 'help',
    'Leave testimonial': 'testimonial',
    'Contact us': 'contact',
    Articles: 'articles',
    'Our news': 'news',
    Testimonials: 'testimonial',
    Licenses: 'licenses',
    'Privacy Policy': 'privacy',
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src="./images/logo.png"
          alt="Test Task"
          className="header__logo"
        />

        <nav className="header__navbar">
          <ul className="navbar__menu">
            {Object.keys(menuLinks).map(link => (
              <li key={link}>
                <a
                  className="navbar__link"
                  href={`#${menuLinks[link]}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <input type="checkbox" id="mobile-menu" className="header__input" />
        <label htmlFor="mobile-menu" className="header__label">
          <img
            src="./images/menu_icon.svg"
            alt="menu toggle"
            className="header__toggle"
          />
        </label>

        <nav className="header__navbar--mobile">
          <ul className="mobile__menu">
            {Object.keys(menuLinksMobile).map(link => (
              <li key={link}>
                <a
                  className="navbar__link"
                  href={`#${menuLinksMobile[link]}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </header>
    </div>
  );
};

export default Header;
