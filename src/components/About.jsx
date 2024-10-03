import Navigation from "./Navigation"

function About() {


  return (
    <>
    <div id="about-content">
        <div className="about-header">
            About <span className="color">Me</span>
            <span className ="header-caption">Get to Know <span className="color"> me.</span></span>
        </div>
        <div className="about-main">
    <div className="about-first-paragraph wow">

       <span className="about-first-line">
            I'm creative 
            <span className="color">web developer</span>
             based in New York , USA </span>
             <br/>
       <span className="about-second-line"> With 20 years of experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step while working.</span>
       <div className="cv">
        <a href="#"><button>Download <span className="colors">CV</span></button></a>
    </div>
    </div>

    <div className="about-img">
        <img src="images/about.jpg" alt="Your Image"/>
    </div>
    </div>

    </div>

    <div id="skills">
        <div className="skills-header">
             My <span className="color"> Skills</span>
        </div>
        <div className="skills-content " style={{textAlign: 'center'}} >
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
                HTML/CSS
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="html-progress wow">95%</div>
            </div>
            </div>
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
              Javascript
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="js-progress wow">90%</div>
            </div>
            </div>
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
                Adobe Ps
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="adobe-progress wow">83%</div>
            </div>
            </div>
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
                PHP
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="php-progress wow">87%</div>
            </div>
            </div>
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
                JQuery
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="jquery-progress wow">94%</div>
            </div>
            </div>
            <div className="skill-html skill">
                <div className="skill-text">
            <div className="html">
                SEO
            </div>
                </div>
            <div className="html-prog wow prog">
         <div className="seo-progress wow">84%</div>
            </div>
            </div>
        </div>
    </div>




    </>
  )
}

export default About
