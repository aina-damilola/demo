import "../styles/footer.css"

import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";

function Footer(){
    return(
        <div id="main-container-footer">
            <div id="text-footer">
                Get in Touch!
            </div>
            <div id="hyperlinks-container-footer">
                <a href="mailto:hello@nsbehacksuoft.ca" rel="norefferer"><MailIcon/></a>
                <a href="https://www.facebook.com/nsbehacksuoft" target="_blank" rel="norefferer"><img src="/facebook.png" alt="Facebook"/></a>
                <a href="https://www.instagram.com/nsbehacks_uoft/" rel="norefferer" target="_blank" ><InstagramIcon/></a>
                <a href="https://www.linkedin.com/company/nsbehacks-uoft/" rel="norefferer" target="_blank" ><LinkedinIcon/></a>
            </div>
        </div>
    );
}

export default Footer;