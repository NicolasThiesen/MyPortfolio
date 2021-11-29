import MobileAplications from '../../Assets/mobile-application.png';
import CloudComputing from '../../Assets/cloud-computing.png';
import DevOps from '../../Assets/devops.png';
import WebApplication from '../../Assets/web-application.png';

import "./style.css";
import {i18n} from '../../translate/i18n';

export const WorkAreas = () => {
    return (
        <div className="work-section">
            <h2>{i18n.t("workAreas.title")}</h2>
            <div className="section">
                <div>
                    <img src={CloudComputing} alt="Cloud Computing" />
                    <h4>{i18n.t("workAreas.cloud")}</h4>
                </div>
                <div>
                    <img src={DevOps} alt="Devops" />
                    <h4>DevOps</h4>
                </div>
                <div>
                    <img src={WebApplication} alt="Web Application" />
                    <h4>{i18n.t("workAreas.web")}</h4>
                </div>
                <div>
                    <img src={MobileAplications} alt="Mobile Aplication" />
                    <h4>{i18n.t("workAreas.app")}</h4>
                </div>
            </div>
        </div>
        
    )
}
