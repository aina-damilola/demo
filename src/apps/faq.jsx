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

function FAQ({section5Ref}){
    return(
        <div id="main-container-faq" ref={section5Ref}>
            <h1>FAQs</h1>
            <div id="faqs-container">
                <Question question="" answer=""/>
            </div>
        </div>
    )
}

export default FAQ;

