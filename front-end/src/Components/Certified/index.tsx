import CloudPractitioner  from '../../Assets/Badge Cloud Practitioner.png';
import CloudArchitect  from '../../Assets/Badge Solutions Architect.png';
import DeveloperAssociate  from '../../Assets/Badge Developer Associate.png';
import "./style.css";
import { i18n } from '../../translate/i18n'

export const CertifiedSection = () => {
    return (
        <div className="badge-section">
            <h2>{i18n.t("badge.title")}:</h2>
            <div className="section badges">
                <img className="section__badge" src={CloudPractitioner} alt="Cloud Practitioner" />
                <img className="section__badge" src={CloudArchitect} alt="Solutions Architect Associate" />
                <img className="section__badge" src={DeveloperAssociate} alt="Developer Associate" />
            </div>
        </div>
    )
}
