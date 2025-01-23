import "./styles/about.css"

import { ReactComponent as Empty_Folder} from "./folder-without-files.svg"
import { ReactComponent as Full_Folder} from "./folder-with-files.svg"

function About(){
    return(
        <div id="main-container-about">
            <h1>About Us</h1>

            <p id="faux-h1">
                <span className="tag">&lt;<span className="tag-type">h1</span>&gt;</span> NSBEHacks 2025 <span className="tag"><code>&lt;</code>/<span className="tag-type">h1</span>&gt;</span>
            </p>
            <p id="faux-h2">    
                <span className="tag">&lt;<span className="tag-type">h2</span>&gt;</span> National Society of Black Engineers <span className="tag"><code>&lt;</code>/<span className="tag-type">h2</span>&gt;</span>
            </p>
            <div id="subcontainer-about-a">
                <div id="subcontainer-about-b">
                    <p id="faux-p">
                        <span className="tag">&lt;<span className="tag-type">p</span>&gt;</span> Hosted by NSBE UofT Chapter, NSBEHacks is the pioneering event of its kind – the first student-run hackathon dedicated to the experiences of Black individuals in technology and engineering. As the largest chapter in Toronto with a global membership of 24,000, NSBE UofT is a dynamic force since its inception in 1999. Beyond academic pursuits, our chapter is committed to activism, community outreach, and leadership within the Black community in technology and engineering spaces.<br/><br/> NSBE Hacks UofT, our flagship initiative, brings together 200 participants annually for a transformative 36-hour experience, aiming to equalize opportunities for Black students in Canada by fostering a space that encourages creativity and innovation. Join us in shaping a more inclusive future where diversity is not just celebrated but actively embraced. <span className="tag"><code>&lt;</code>/<span className="tag-type">p</span>&gt;</span>
                    </p>
                    {/* <p id="faux-img">
                        <span className="tag">&lt;<span className="tag-type">img</span></span> src="/folder/logo.png"<span className="tag">&gt;</span>
                    </p> */}
                </div>
                <div id="subcontainer-about-c">
                    {/* <div id="folder"></div> */}
                </div>
            </div>
            <div id="quantities">
                <div id="quantity-a">
                    <span>20+</span>
                    <p>organizers</p>
                </div>
                <div id="quantity-b">
                    <span>250+</span>
                    <p>hackers</p>
                </div>
                <div id="quantity-c">
                    $6000+
                    <p>prizes</p>
                </div>
                
            </div>
        </div>
    );
}

export default About;