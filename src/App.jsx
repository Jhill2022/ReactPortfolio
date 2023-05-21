import './App.css';
import Header from './pages/Header';
import Controlls from './pages/Controlls';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';



function App() {
  useEffect(() => {
    // Typed js
    const typed = new Typed('.type', {
      strings: ["", "Hi, I'm <span>Joshua Hill.</span> A Web Developer"],
      typeSpeed: 50,
      backSpeed: 0,
      loop: 200,
      showCursor: false,
    });
  }, []);

  return (
    <>
      <Header />
      <About/>
      <Controlls/>
    <Portfolio/>
    <Blogs/>
    </>
  );
}

export default App;