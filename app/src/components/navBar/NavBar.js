import { Link } from 'react-router-dom';

import './navBar.scss';

import logo from '../../resources/img/navbar-logo.png';
import menu from '../../resources/img/navbar-menu.png';
import catalog from '../../resources/img/navbar-catalog.png';
import bag from '../../resources/img/navbar-bag.png'
import logout from '../../resources/img/logout.png';

const NavBar = () => {
    return (
        <div className="navbar">
            
                <div className="navbar-links">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to="/">
                        <img src={menu} alt="" />
                    </Link>
                    <Link to="/">
                        <img src={catalog} alt="" />
                    </Link>
                    <Link to="/bag">
                        <img src={bag} alt="" />
                    </Link>
                </div>
                <div className="navbar-bottom">
                    <a href="#">
                    <img src={logout} alt="logout"/>
                    </a>
                </div>
            
        </div>
    )
}

export default NavBar;