import React from 'react'
import "./Navbar.css";


const Navbar = () => {
  
  return (
    <>
    <nav className="navbar">
        <div className="brand-title">Gurkirat Kaur</div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>



      <section className='hero-section'>
        <p>Welcome to</p>
        <h1>React JS</h1>

      </section>



      <footer className='footer'>
        
      </footer>
     </>




  )
}

export default Navbar
