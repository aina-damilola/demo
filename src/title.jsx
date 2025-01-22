import "./styles/title.css";

import React from "react";

function Title() {
    return (
        <div id="title-body">
            <div id="title-container"><h1>NSBEHacks.</h1></div>
            <h2>The first student-run <span id="highlighted">black hackathon</span> in the GTA!</h2>
            <p>Toronto, Ontario</p>
            <p>Month 15th - 16th, <span style={{color:"rgb(47, 115, 205)"}}>2025</span></p>
            <div id="button-container">
                <a href="" target="_blank" rel="norefferer"className="button">Register</a>
                {/* <div className="button">Sponsor Us</div> */}
            </div>
            
            <a href="https://form.typeform.com/to/V9QcvO6O" rel="norefferer" target="_blank"><div>Interested in becoming a volunteer?</div></a>
        </div>
    );
}

export default Title;
