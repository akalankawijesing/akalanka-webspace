import Navigation from "./Navigation";
import { TypeAnimation } from 'react-type-animation';


function Header() {


  return (
    <>
       
    <Navigation/>
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
                <div className="firstline"><span className="color">Akalanka </span>Wijesinghe</div>
                <div className="secondline">
                <TypeAnimation
         preRenderFirstString={true}
         sequence={[
           500,
           "I'm a Developer", // initially rendered starting point
           1000,
           "I'm a Designer",
           1000,
           "I'm a Blogger",
           1000,
           "I'm a Freelancer",
           500,
         ]}
         speed={50}
         style={{ }}
         repeat={Infinity}
    />

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
