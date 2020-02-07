import React from 'react';
import styles from './NavBar.module.scss';

/**
 * A navigation bar for the wesite.
 * @param {String} props.current The current location name the user is navigating through.
 * @version 1.1
 * @author [David Klein, Polarts](https://github.com/Polarts)
 */
const NavBar = (props) =>  {
    
    /**
     * Compares the given name with props.current and returns the proper style.
     * @param {*} name the name of the nav location the link represents.
     */
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

            <a id="teamNav"
                href="#team"
                className={linkStyle("team")}>
                Our Team
            </a>

            <div className={styles.externalLinks}>
                <a href="https://www.facebook.com/groups/haifadev/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook"/>
                </a>
                <a href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png" alt="WhatsApp"/>
                </a>
                <a href="https://www.meetup.com/Haifa-dev" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png" alt="Meetup"/>
                </a>
            </div>

        </nav>
    ); 
}

export default NavBar;