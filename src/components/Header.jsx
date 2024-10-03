import Navigation from "./Navigation"

function Header() {


  return (
    <>
       

        <div id="header">
            <div id="particles"></div>

            <div className="social-media-links">
               <a href="#"><img src="images/instagram logo.png" className="social-media" alt="instagram-logo"/></a>
                <a href="#"><img src="images/facebook logo.png" className="social-media" alt="facebook-logo"/></a>
                <a href="#"><img src="images/linkedin logo.png" className="social-media" alt="linkedin-logo"/></a>
                <a href="#"><img src="images/twitter logo.png" className="social-media" alt="twitter-logo"/></a>

            </div>
            <div className="header-content">
                <div className="header-content-box">
                <div className="firstline"><span className="color">Arlo </span>Brown</div>
                <div className="secondline">
                I'm a
            <span className="txt-rotate color" data-period="1200"data-rotate='[ " Designer.", " Blogger.", " Freelancer." ]'></span>
            <span className="slash">|</span>
        </div>
                    <div className="contact">
                <a href="Mailto:#"><img src="images/mail.png" alt="email-pic" className="contactpic"/></a>
                <a href="Tel:#"><img src="images/call.png" alt="phone-pic" className="contactpic"/></a>
                    </div>    
            </div>
            </div>

            <div className="header-image">
            <img src="images/man.jpg" alt="logo"/>
            </div>

        </div>

    </>
  )
}

export default Header
