import React, { useState } from 'react';

function Workexperience(){
    return(
        <div className="edu-container">
            <div className="title">Work Experience</div>
            <div className="edu-text">
        <div className="edu-block"></div>
        <div className="edu-name">Wipro Technologies</div>
        <div>Project Engineer</div>
        <div className="edu-locdate">
        <div className="edu-date">July 2021 - Present</div>
        <div className="edu-location">Pune, India</div>
        
        </div>
        <div className="edu-act"><div>
        <ul>
        <li className="edu-list">Worked on PL-SQL and oracle database in a project to migrate data to Oracle
cloud.</li>
        <li className="edu-list">Did compatibility checks and created Reconciliation scripts, Pre-Validation
scripts for the newest version of Oracle fusion cloud</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Workexperience;