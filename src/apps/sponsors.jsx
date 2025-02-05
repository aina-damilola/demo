import "../styles/sponsors.css" 

function Sponsors({section4Ref}){
    return(
        <div id="main-container-sponsors" ref={section4Ref}>
            <h1>Our Sponsors</h1>
            <div id="sponsors-container"> 
                <div className="sponsor-image" style={{backgroundColor:"rgb(202, 232, 255)"}}><img loading="eager" width="100%"height="100%"src="/sponsor_logos/BFN-logo.png"/></div>
                <div className="sponsor-image" style={{backgroundColor:"#7e8187"}}><img loading="eager" width="100%"height="100%"src="/sponsor_logos/cohere-logo.png"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%"height="100%"src="/sponsor_logos/manulife-logo.jpg"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%"height="100%"src="/sponsor_logos/mitzies-logo.png"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%"height="100%"src="/sponsor_logos/rbc-logo.png"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%" height="100%"src="/sponsor_logos/salesforce-logo.png"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%"height="100%"src="/sponsor_logos/stevag-logo.jpeg"/></div>
                <div className="sponsor-image"><img loading="eager" width="100%"height="100%"src="/sponsor_logos/UofT-logo.jpg"/></div>
            </div>
        </div>
    )
}

export default Sponsors;