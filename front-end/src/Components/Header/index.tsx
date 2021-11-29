import Icon from "../../Assets/NMT_icon.png"
import "./style.css";
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import { useState } from 'react'

const I18N_STORAGE_KEY = "i18nextLng"

const Header = () => {
    const [lang] = useState(localStorage.getItem(I18N_STORAGE_KEY)!);

    const handleLanguage = (event: any) => {
        localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
        window.location = window.location
    }
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">
                        <img src={Icon} alt="NMT Icon" />
                    </Link>
                </div>
                <ul>
                    <Link to="/abaut">
                        <li>{i18n.t("buttons.about")}</li>
                    </Link>
                    <Link to="/portfolio">
                        <li>{i18n.t("buttons.portfolio")}</li>
                    </Link>
                    <Link to="/services">
                        <li>{i18n.t("buttons.services")}</li>
                    </Link>
                    <Link to="/contact">
                        <li>{i18n.t("buttons.contact")}</li>
                    </Link>                 
                    <select value={lang} className="select" name="languages" id="languages" onChange={handleLanguage}>
                        <option value="pt">PT</option>
                        <option value="eng">ENG</option>
                    </select>           
                </ul>
            </nav>
        </header>
    )
}

export default Header;
