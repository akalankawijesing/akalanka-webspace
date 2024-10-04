import React, { useState } from 'react';


function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>

    

        <div id="navigation-content" className={`${navbarOpen ? ' show-menu' : ''}`}>

            <div className="logo">
                <img src="images/logo.png" alt="logo"/>
                
            </div>


            <div className="navigation-close" onClick={() => setNavbarOpen(false)}> 
                <span className="close-first"></span>
                <span className="close-second"></span>
            </div>


            <div className="navigation-links">
                <a href="#" data-text="HOME" id="home-link" onClick={() => setNavbarOpen(false)} >HOME</a>
                <a href="#" data-text="ABOUT" id="about-link" onClick={() => setNavbarOpen(false)} >ABOUT</a>
                <a href="#" data-text="BLOG" id="blog-link" onClick={() => setNavbarOpen(false)} >BLOG</a>
                <a href="#" data-text="PORTFOLIO" id="portfolio-link" onClick={() => setNavbarOpen(false)} >PORTFOLIO</a>
                <a href="#" data-text="CONTACT" id="contact-link" onClick={() => setNavbarOpen(false)} >CONTACT</a>
            </div>


        </div>


        <div id="navigation-bar">
           
        <div className="logo-txt">akalanka<span className="color logo-cloud">.cloud</span></div>

            <div className="menubar" onClick={() => setNavbarOpen((prev) => !prev)}>
                
                <span className="first-span"></span>
                <span className="second-span"></span>
                <span className="third-span"></span>
            </div>
        </div>

    </>
  )
}

export default Navigation
