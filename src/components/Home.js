import React from 'react'

import './Home.css';
import './ProjectCard.css';

const Home = () => (
  <div className="home">
    <div className="home__hero">
      <div className="home__hero-inner">
        <h1 className="home__hero-title">Connect through work that's both great and small</h1>
      </div>
    </div>
    <div className="home__form">
      <div className="home__form-inner">
        <label className="home__form-label">Find the best work you've ever seen:</label>
        <div className="home__form-input-wrapper">
          <input className="home__form-input" type="text" />
        </div>
      </div>
    </div>
    <div className="home__featured">
      <div className="home__featured-inner">

        <h2 className="home__featured-title">Featured Projects</h2>
        <p className="home__featured-sub-title">Nominated by our members</p>

        {[...Array(2)].map((x, i) =>
          <div className="project-card" key={i}>
            <div className="project-card__inner">
              <div className="project-card__media">
                <img className="project-card__media" src="https://placeimg.com/480/480/any" alt="" />
              </div>
              <div className="project-card__desc">
                <div className="project-card__icon">
                  <img className="project-card__icon-img" src="https://placeimg.com/40/40/any" alt="" />
                </div>
                <div className="project-card__title">
                  <h3 className="project-card__title-text">Redesigning the Bristol library</h3>
                </div>
                <div className="project-card__rating">
                  <span className="project-card__rating-icon">&uarr;</span>
                  <span className="project-card__rating-count">7</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  </div>
)

export default Home
