import "../styles/title.css";

import React from "react";

function Title({section1Ref}) {
    return (
        <div id="title-body" ref={section1Ref}>
            <div id="title-container"><h1>NSBEHacks.</h1></div>
            <h2>The first student-run <span id="highlighted">black hackathon</span> in the GTA!</h2>
            <p>Bahen, 40 St George st. Toronto, ON</p>
            <p>February 15th - 16th, <span style={{color:"rgb(47, 115, 205)"}}>2025</span></p>
            <div id="button-container">
                <a href="https://form.typeform.com/to/y2lRE2Ot" target="_blank" rel="norefferer"className="button">Register</a>
                <div className="button">Sponsor Us</div>
            </div>
            
            <a href="https://form.typeform.com/to/V9QcvO6O" rel="norefferer" target="_blank"><div>Interested in becoming a volunteer?</div></a>
        </div>
    );
}

export default Title;
