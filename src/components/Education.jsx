import React, { useState } from 'react';

function Education(){
    return(
        <div className="edu-container" id="Education" >
        
        <div className="title">Education</div>
        <div className="edu-text">
        <div className="edu-block"></div>
        <div className="edu-name">Indian Institute of Technology BHU Varanasi (IIT BHU)</div>
        <div>B.Tech</div>
        <div className="edu-locdate">
        <div className="edu-date">July 2017 - May 2021</div>
        <div className="edu-location">Varanasi, India</div>
        </div>
        <div className="edu-act"><div><div className="edu-act-title">Activites and Club</div>
        <ul>
        <li className="edu-list">Quizzing, Coding </li>
        <li className="edu-list">Member of IIT BHU Quiz Club</li>
        <li className="edu-list">Participated and won at various events including Inter IIT cult meet, Nihilanth (Inter IIT - IIM Quiz fest), KY</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Education;