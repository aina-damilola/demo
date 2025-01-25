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

function FAQ({section5Ref}){
    return(
        <div id="main-container-faq" ref={section5Ref}>
            <h1>FAQs</h1>
            <div id="faqs-container">
                <Question question="How many people per team?" answer="Each team should have within 3-4 people in the team but a concrete list of persons are not needed upon registration."/>
                
                <Question question="Is NSBEHacks only for black identifying people?" answer="No, NSBEHacks welcomes everyone from all demographics. We strive for an inclusive environment where inclusion and learning is at the forefront."/>

                <Question question="What is the theme for NSBEHacks 2025?" answer={<>NSBEHacks invites participants to explore the mindful integration, use, and creation of artificial intelligence (AI) to solve pressing challenges. With the theme “AI with Purpose,” we challenge participants to design projects where AI is not just a tool but a transformative force, solving problems that would be otherwise impossible without it. Participants are encouraged to focus on intentional and ethical uses of AI, creating solutions that demonstrate unique value derived from AI technologies.</>}/>

                <Question question="Can I register for NSBEHacks if I'm not in University of Toronto?" answer="Yes! NSBEHacks welcomes everyone from all institutions and skill levels to join in the hackathon!"/>
            </div>
        </div>
    )
}

export default FAQ;

