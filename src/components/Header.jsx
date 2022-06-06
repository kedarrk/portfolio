import React, { useState } from 'react';

function Header(){
    return(
        <div className="container">
        <div className="Header">

             <div className="header-btn"><a href="#education" textDecoration="none">Education</a></div>
             <div className="header-btn"><a href="#workex">Experience</a></div>
             <div className="header-btn"><a href="#skills">Skills</a></div>
             <div className="header-btn grid-2"><a href="#projects">Projects</a></div>
             <div className="header-btn grid-2"><a href="#contact">Contact</a></div>
        </div>
        <div className="about-grid" data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-once="true">
        {/* <div className="name-grid">
        <div className="name">Kedar Kadu</div>
        <div className="name-logo"><img src="https://img.icons8.com/glyph-neue/64/undefined/github.png"  height="70px" width="70px"/><img src="https://img.icons8.com/fluency/200/undefined/linkedin.png" height="70px" width="70px"/></div>
        </div> */}
        <div className="about-txt">
        <div style={{textAlign:"Left", fontFamily:"montserrat", fontSize:"0.95em"}}>Hi, my name is</div> <div style={{textAlign:"Left", fontFamily:"montserrat", fontSize:"3em"}}>Kedar Kadu </div>
        <div style={{textAlign:"Left",fontFamily:"montserrat", fontSize:"0.95em"}}> I am an IIT BHU graduate. I am passionate about coding and love solving challenging problems. I am currently interested in building things for the web.</div> 
        </div>
        </div>
        <div class="custom-shape-divider-top-1654105245">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

        </div>
    );
}
export default Header;