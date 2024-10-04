import React, { useState ,useRef, useEffect } from 'react';


function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
          if (
            navbarOpen &&
            ref.current &&
            !ref.current.contains(event.target)
          ) {
            setNavbarOpen(false);
          }
        };
        document.addEventListener('mousedown', handler);
        return () => {
          // Cleanup the event listener
          document.removeEventListener('mousedown', handler);
        };
      }, [navbarOpen]);

  return (
    <>

    

        <div id="navigation-content" ref={ref} className={`${navbarOpen ? ' show-menu' : ''}`}>

            <div className="logo">
            <div className="logo-txt">akalanka<span className="color logo-cloud">.cloud</span></div>
                
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
