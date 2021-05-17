import Icon from "../../Assets/Nicolas Icon.png"
import "./style.css";
import { Link } from 'react-router-dom'
import CloudPractitioner from '../../Assets/Badge Cloud Practitioner.png'
import CloudArchitect from '../../Assets/Badge Solutions Architect.png'


export const Footer = () => {
    return (
        <footer>
            <nav>
                <div className="footer__column">                    
                    <img src={Icon}></img>
                    <h2>Nícolas Medeiros Thiesen</h2>
                    <h3>| Arquiteto em Nuvem e Programador</h3>
                    
                </div>
                
                <div>
                    
                    <div>
                        <img src={CloudPractitioner} className="footer__badge" alt="Cloud Practiotioner" />
                        <img src={CloudArchitect} className="footer__badge" alt="Cloud Practiotioner" />
                    </div>
                </div>
            </nav>
        </footer>
    )
}