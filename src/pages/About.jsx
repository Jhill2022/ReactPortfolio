import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  
    return (
        <section className="section sec2 about" id="about">
          <div className="main-title">
            <h2>
              About <span>me</span>
              <span className="bg-text">my stats</span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4>Information About me</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dolor nostrum eius minima officia
                possimus quod laboriosam, voluptas neque cum! Corrupti atque illo nesciunt quibusdam alias sunt suscipit
                non in.
              </p>
              <div className="btn-con">
                <a href="" className="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                  <FontAwesomeIcon icon={faDownload} />
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about">
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">560+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">560+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">560+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">560+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog text">10%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Css</p>
                <div className="progress-con">
                  <p className="prog text">40%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                  <p className="prog text">50%</p>
                  <div className="progress">
                    <span className="python"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">React</p>
                <div className="progress-con">
                  <p className="prog text">90%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Node</p>
                <div className="progress-con">
                  <p className="prog text">100%</p>
                  <div className="progress">
                    <span className="node"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer <span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, odio. Repellat incidunt amet dignissimos
                aliquam, temporibus illum odio, ut aperiam rem cumque, explicabo ratione! Quia laudantium explicabo repellat
                rem ex.
              </p>
            </div>
          </div>
        </section>
      );
}

export default About