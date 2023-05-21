import React from 'react'
import Picture from '../assets/jhillss.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div className='main-content'>
        <header className="section sec1 header active" id="home">
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={Picture} alt="jhill"
                        width="400"
                        height="500"/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name type">
                    
                </h1>
                <p>
                   I am a Web developer , i love to create beautiful and functional websites.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, eligendi
                     nobis, facilis, deleniti laborum culpa dolorum temporibus repellendus accusamus ducimus? Vero cum quis animi pariatur distinctio accusamus repellendus enim!
                </p>
                <div className="btn-con">
                    <a href="" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><FontAwesomeIcon icon={faDownload} /></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header