
function Navigation() {


  return (
    <>

    

        <div id="navigation-content">
            <div className="logo">
                <img src="images/willy wonka logo.png" alt="logo"/>
            </div>
            <div className="navigation-close">
                <span className="close-first"></span>
                <span className="close-second"></span>
            </div>
            <div className="navigation-links">
                <a href="#" data-text="HOME" id="home-link" >HOME</a>
                <a href="#" data-text="ABOUT" id="about-link" >ABOUT</a>
                <a href="#" data-text="BLOG" id="blog-link" >BLOG</a>
                <a href="#" data-text="PORTFOLIO" id="portfolio-link" >PORTFOLIO</a>
                <a href="#" data-text="CONTACT" id="contact-link" >CONTACT</a>
            </div>
        </div>
        <div id="navigation-bar">
            <img src="images/willy wonka logo.png" alt="logo"/>
            <div className="menubar">
                <span className="first-span"></span>
                <span className="second-span"></span>
                <span className="third-span"></span>
            </div>
        </div>

    </>
  )
}

export default Navigation
