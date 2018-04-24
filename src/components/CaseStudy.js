import React from 'react'

import './CaseStudy.css';

const CaseStudy = () => (
  <div className="case-study">
    <div className="case-study__hero">
        <div className="case-study__hero-inner">
        <h1 className="case-study__hero-title">Case Study</h1>
        <p className="case-study__hero-standfirst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

    <div className="case-study__blocks">
      <div className="case-study__blocks-inner">

        {[...Array(2)].map((x, i) =>

          <div className={i % 2 === 0 ? 'case-study__block' : 'case-study__block case-study__block--even'} key={i}>
            <div className="case-study__block-media">
              <img src="https://placeimg.com/640/480/any" alt="" />
            </div>
            <div className="case-study__block-text">
              <h2 className="case-study__block-text-title">Lorem ipsum dolor sit amet</h2>
              <div className="case-study__hero-text-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>

        )}

      </div>
    </div>

    <div className="case-study__vote">
      <div className="case-study__vote-inner">
        <h2 className="case-study__vote-title">Vote or Discuss</h2>
        <p className="case-study__vote-standfirst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="cta cta--primary">Click me</a> <a className="cta cta--secondary">Or click me</a>
        <h2 className="case-study__vote-sub-title">Nominate</h2>
        <p className="case-study__vote-standfirst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

    <div className="case-study__related">
      <div className="case-study__related-inner">

        {[...Array(5)].map((x, i) =>
          <div className="case-study__related-item" key={i}>
            <div className="case-study__related-item-inner">
              <h3 className="case-study__related-item-title">Case Study Name</h3>
              <div className="case-study__block-item-media">
                <img src="https://placeimg.com/640/480/any" alt="" />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>

  </div>
)

export default CaseStudy
