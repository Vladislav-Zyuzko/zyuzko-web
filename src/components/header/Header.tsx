import { useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import headerCss from './header.module.css'
import headerLinks from '../../data/HCHeaderLinksData';

function Header() {

    const location = useLocation();
  
    useEffect(() => {
        const links = document.querySelectorAll(`.${headerCss.link}`);
        links.forEach((link) => {
        if (link.getAttribute('href') === location.pathname) {
            link.classList.add(headerCss['current-link']);
        } else {
            link.classList.remove(headerCss['current-link']);
        }
        });
    }, [location.pathname]);

    return <header className={headerCss.header}>
        <div className={headerCss.logo}>
            <img src="src/assets/images/logo.png" alt="HCLogo" className={headerCss.img}/>
            HealthCare
        </div>
        <nav className={headerCss.nav}>
            {headerLinks.map((item) => <Link to={item.link} className={headerCss.link}>{item.title}</Link>)}
        </nav>
    </header>
}

export default Header;
