import "../styles/header.css"

import nsbeLogo from '../assets/nsbe-logo.png';
import { useEffect, useRef, useState } from "react";
// import nsbeGLogo from './nsbe-logo-general.png';

var current;

function updatePage(percent){
    const hyperlinks = document.querySelectorAll('.header-button');
  

    if(percent < 110 && percent >= 0 && !hyperlinks[0].classList.contains('on-this-page')){
        current = 0;
        hyperlinks[0].classList.add('on-this-page');
    }
    else if(percent >= 110 && !hyperlinks[1].classList.contains('on-this-page')){
        current = 1;
        hyperlinks[1].classList.add('on-this-page');
    }
    
    for(var i = 0; i < hyperlinks.length; i++){
        if(hyperlinks[i].classList.contains('on-this-page')){
            if(i != current){
                hyperlinks[i].classList.remove('on-this-page');
            }
        }
    }
}



function Header({onScrollToSection}){
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        const scroll_header = () => {
            setPercent(((window.scrollY/window.innerHeight) *100)); 
            // console.log(percent);
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
                <div onClick={() => onScrollToSection("section1")} className="header-button on-this-page">Homepage</div>
                <div onClick={() => onScrollToSection("section2")} className="header-button">About</div>
                <div onClick={() => onScrollToSection("section3")} className="header-button">Team</div>
                {/* <div className="header-button">Sponsors</div> */}
                {/* <div className="header-button">FAQ</div> */}
            </div>
            {/* <img id="mlhBadge" src={nsbeGLogo}/> */}
        </div>
    );
}


export default Header;