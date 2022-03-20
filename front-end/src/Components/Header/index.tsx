import Icon from "../../Assets/NMT_icon.png"
import "./style.css";
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import { useState } from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core';
import { Menu as MenuIcon, Home} from '@material-ui/icons'
const I18N_STORAGE_KEY = "i18nextLng"

const Header = () => {
    const [lang] = useState(localStorage.getItem(I18N_STORAGE_KEY)!);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };
    
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
                    <Link className="link-item" to="/">
                        <li>{i18n.t("buttons.home")}</li>
                    </Link>
                    <Link className="link-item" to="/portfolio">
                        <li>{i18n.t("buttons.portfolio")}</li>
                    </Link>
                    {/* <Link className="link-item" to="/services">
                        <li>{i18n.t("buttons.services")}</li>
                    </Link> */}
                    <Link className="link-item" to="/contact">
                        <li>{i18n.t("buttons.contact")}</li>
                    </Link>
                    <select value={lang} className="select" name="languages" id="languages" onChange={handleLanguage}>
                        <option value="pt">PT</option>
                        <option value="eng">ENG</option>
                    </select>   
                    <div className="menu">
                    <Button id="basic-button" aria-controls="basic-menu" aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{color: "text.primary"}}
                    >
                    <MenuIcon></MenuIcon>
                    </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{
                                color: "text.primary"
                            }}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to="/">{i18n.t("buttons.home")} <Home></Home> </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/portfolio">
                                {i18n.t("buttons.portfolio")}
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/services">
                                    {i18n.t("buttons.services")}
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/contact">
                                {i18n.t("buttons.contact")}
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>        
                </ul>
            </nav>
        </header>
    )
}

export default Header;
