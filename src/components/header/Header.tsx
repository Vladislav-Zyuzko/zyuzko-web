import { useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import headerCss from './header.module.css'

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
            <Link to="/" className={headerCss.link}>Home</Link>
            <Link to="/find-doctor" className={headerCss.link}>Find a doctor</Link>
            <Link to="/apps" className={headerCss.link}>Apps</Link>
            <Link to="/testimonials" className={headerCss.link}>Testimonials</Link>
            <Link to="/about" className={headerCss.link}>About us</Link>
        </nav>
    </header>
}

export default Header;