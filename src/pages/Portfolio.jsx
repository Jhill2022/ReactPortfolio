import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioItems } from '../Components/portfolioItems';

const Portfolio = () => {
  

  return (
    <section className="section sec3" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                {item.icons.map((icon, i) => (
                  <a href="#" className="icon" key={i}>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;