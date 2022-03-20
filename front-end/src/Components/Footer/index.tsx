import Icon from "../../Assets/Nicolas Icon.png";
import "./style.css";
import CloudPractitioner from '../../Assets/Badge Cloud Practitioner.png';
import CloudArchitect from '../../Assets/Badge Solutions Architect.png';
import DeveloperAssociate  from '../../Assets/Badge Developer Associate.png';
import Linkedin from '../../Assets/linkedin.png';
import Github from '../../Assets/github.png';

import { i18n } from '../../translate/i18n';

export const Footer = () => {
    return (
        <footer>
            <nav>
                <div className="footer__column">                    
                    <img src={Icon} alt="Nícolas Medeiros Thiesen"></img>
                    <h2>Nícolas Medeiros Thiesen</h2>
                    <h3>| {i18n.t("footer.title")}</h3>
                    
                </div>
                
                <div className="footer__column">
                    
                    <div>
                        <img src={CloudPractitioner} className="footer__badge" alt="Cloud Practiotioner" />
                        <img src={CloudArchitect} className="footer__badge" alt="Solutions Architect Associate" />
                        <img src={DeveloperAssociate} className="footer__badge" alt="Developer Associate" />
                        
                    </div>
                    <div>
                        <a href="https://github.com/NicolasThiesen/">
                            <img className="footer__icon" src={Github} alt="Github Nícolas" />
                        </a>
                        <a href="https://www.linkedin.com/in/NicolasThiesen">
                            <img className="footer__icon" src={Linkedin} alt="Linkedin Nícolas" />
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
    )
}
