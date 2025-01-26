import "../styles/faq.css" 

import { ReactComponent as Plus } from "../assets/plus-sign.svg"
import { ReactComponent as Minus } from "../assets/minus-sign.svg"
import { useState } from "react"

function Question(props){
    const [open, setOpen] = useState(false);

    const handleSignClick = () => {
        setOpen(!open);
    };

    return(
        <div id="faq-unit">
            <div id="faq-div-a">
                <div id="faq-question">
                    {props.question}
                </div> 
                {open ? <Minus id="symbol-faq" onClick={handleSignClick}/> : <Plus id="symbol-faq" onClick={handleSignClick}/>}
                
            </div>
            <div id="faq-div-b">
                {open ? props.answer : <></>}
            </div>
        </div>
    )
}

/*
AI is  a broad term that we define within the scope of NSBEHacks as a part of one of the following classes:
                <br/>
                <ul>
                    <li>
                        Generative AI: Leveraging AI to create media such as audio, text, images, and video.
                    </li>
                    <li>
                        Predictive AI: Using AI to forecast events or outcomes for preventative or proactive actions, such as climate risk analysis or personalized medicine.
                    </li>
                    <li>
                        Security AI: Implementing AI for enhanced protection, including facial recognition, breach detection, and anomaly identification.
                    </li>
                    <li>
                        Assistive AI: Tools that augment human capabilities, such as accessibility devices or cognitive aids for education and work.
                    </li>
                    <li>
                        Optimizing AI: Systems designed to improve efficiencies in processes like supply chains, energy consumption, or urban planning.
                    </li>
                </ul>
*/

// in the team but a concrete list of persons are not needed upon registration.

function FAQ({section5Ref}){
    return(
        <div id="main-container-faq" ref={section5Ref}>
            <h1>FAQs</h1>
            <div id="faqs-container">

                <Question question={"Where will NSBEHacks be held?"} answer={"NSBEHacks will be held at the University of Toronto's Bahen Centre for Information Technology, located at 40 St George St, Toronto, ON M5S 2E4."}/>
                <Question question={"What is this year's theme?"} answer={"NSBEHacks invites participants to explore the mindful integration, use, and creation of artificial intelligence (AI) to solve pressing challenges. With the theme “AI with Purpose,” we challenge participants to design projects where AI is not just a tool but a transformative force, solving problems that would be otherwise impossible without it. Participants are encouraged to focus on intentional and ethical uses of AI, creating solutions that demonstrate unique value derived from AI technologies."}/>
                <Question question={"Will there be prizes?"} answer={"Yes, there will be over $6000 in prizes! Stay tuned for the exciting details as they will be announced closer to the date of the hackathon. "}/>
                <Question question={"How many people are in a team?"} answer={"Teams will be composed of 3-4 people."}/>
            
                <Question question={"Who can participate?"} answer={"The event is open for everybody, regardless of racial identity and educational background."}/>
                <Question question={"Is there a registration fee?"} answer={"No, there is no registration fee. Additionally, participants will enjoy complimentary food, including snacks, and there will be designated spaces for breaks and naps."}/>
                <Question question={"What if I don't have a team?"} answer={"No problem at all if you don't have a team yet! We've set up dedicated events and communication servers to help you find like-minded teammates. Feel free to join in, connect with others, and let's make the team-building process a breeze. We're here to ensure everyone has a smooth and enjoyable experience throughout the hackathon."}/>
                <Question question={"What do I need to bring?"} answer={"Just bring your laptop and charger, and you're good to go! Feel free to bring along anything else that makes you comfortable and ready to hack."}/>
            </div>
        </div>
    )
}

export default FAQ;

