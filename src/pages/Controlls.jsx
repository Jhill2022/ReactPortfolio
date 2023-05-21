import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faNewspaper,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons';

const Controlls = () => {
  const [activeButtonId, setActiveButtonId] = useState('home');

  const handleButtonClick = (id) => {
    setActiveButtonId(id);
    handleSectionClick(id); // Call handleSectionClick to activate the corresponding section
  };

  const handleSectionClick = (id) => {
    const sectBtns = document.querySelectorAll('.controls');
    const sections = document.querySelectorAll('.section');

    // remove selected from the other buttons
    sectBtns.forEach((btn) => {
      btn.classList.remove('active');
    });

    // hide other sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    const element = document.getElementById(id);
    if (element) {
      element.classList.add('active');
    }
  };

  const buttons = [
    { id: 'home', icon: faHouse },
    { id: 'about', icon: faUser },
    { id: 'portfolio', icon: faBriefcase },
    { id: 'blogs', icon: faNewspaper },
    { id: 'contact', icon: faEnvelopeOpen }
  ];

  return (
    <div className="controlls">
      {buttons.map((button) => (
        <div
          key={button.id}
          className={`control ${activeButtonId === button.id ? 'active-btn' : ''}`}
          data-id={button.id}
          onClick={() => handleButtonClick(button.id)}
        >
          <FontAwesomeIcon icon={button.icon} />
        </div>
      ))}
    </div>
  );
};

export default Controlls;
