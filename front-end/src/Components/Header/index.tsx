import Icon from "../../Assets/NMT_icon.png"
import "./style.css";
import { Link } from 'react-router-dom'
const Header = () => {
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
                        <li>Sobre</li>
                    </Link>
                    <Link to="/works">
                        <li>Trabalhos</li>
                    </Link>
                    <Link to="/services">
                        <li>Serviços</li>
                    </Link>
                    <Link to="/contct">
                        <li>Contato</li>
                    </Link>                 
                                        
                </ul>
            </nav>
        </header>
    )
}

export default Header;
