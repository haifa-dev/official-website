import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = (props) =>  {
    
    function linkStyle(name) {

        if (name === props.current) {
            return styles.navLinkSelected;
        }

        return styles.navLinkStatic
    }

    return (
        <nav>
            <a id="homeNav" 
                href="#home" 
                className={linkStyle("home")}>
                Home
            </a>
            <a id="aboutNav" 
                href="#about" 
                className={linkStyle("about")}>
                About Us
            </a>
            <a id="contactNav" 
                href="#contact" 
                className={linkStyle("contact")}>
                Contact
            </a>
        </nav>
    );

}

export default NavBar;