import "./styles/Header.css"

import nsbeLogo from './nsbe-logo.png';
import { useEffect, useState } from "react";
// import nsbeGLogo from './nsbe-logo-general.png';

function updatePage(percent){
    const hyperlinks = document.querySelectorAll('.header-button');
    var current;

    if(percent < 50 && percent >= 0 && !hyperlinks[0].classList.contains('on-this-page')){
        current = 0;
        hyperlinks[0].classList.add('on-this-page');
    }
    
    for(var i = 0; i < hyperlinks.length; i++){
        if(hyperlinks[i].classList.contains('on-this-page'));
    }
}

function Header(){
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        const scroll_header = () => {
            setPercent(((window.scrollY/window.innerHeight) *100)); 
            updatePage(percent);
        };

        window.addEventListener("scroll", scroll_header);
        return()=>{
            window.removeEventListener("scroll", scroll_header);
        };
        
    });


    return(
        <div id="header">
            <img id="nsbeLogo" src={nsbeLogo} alt="NSBEHacks 2025"/>
            <div id="header-hyperlinks">
                <div className="header-button on-this-page">Homepage</div>
                <div className="header-button">About</div>
                <div className="header-button">Team</div>
                <div className="header-button">Sponsors</div>
                <div className="header-button">FAQ</div>
            </div>
            {/* <img id="mlhBadge" src={nsbeGLogo}/> */}
        </div>
    );
}


export default Header;