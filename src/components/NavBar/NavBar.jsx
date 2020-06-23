import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './NavBar.module.scss';
import { Link } from "react-router-dom";

const SocialIcons = ({ isSocialOpen }) => (
  <div className={styles.externalLinks} style={isSocialOpen ? { display: 'flex' } : null}>
    <a href="https://www.facebook.com/groups/haifadev/" target="_blank" rel="noopener noreferrer">
      <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" />
    </a>
    <a href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png" alt="WhatsApp" />
    </a>
    <a href="https://www.meetup.com/Haifa-dev" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png" alt="Meetup" />
    </a>
  </div>
)

/**
 * A navigation bar for the wesite.
 * @param {String} props.current The current location name the user is navigating through.
 * @version 1.1
 * @author [David Klein, Polarts](https://github.com/Polarts)
 */
const NavBar = () => {
  const [isSocialOpen, setSocialOpen] = useState(false);

  const onClick = () => setSocialOpen(!isSocialOpen);

  return (
    <nav>
      <a id="homeNav" href="/#home">
        <span>Home</span>
      </a>

      <a id="aboutNav" className={styles.aboutNav} href="/#about">
        <span>About Us</span>
      </a>

      <a id="contactNav" href="/#contact">
        <span>Contact</span>
      </a>

      <a id="teamNav" className={styles.teamNav} href="/#team">
        <span>Our Team</span>
      </a>

      <Link to="/ProjectRequest">Request project</Link>

      <img
        className={styles.socialButton}
        src={require('../../img/social-icon.png')}
        alt="Social"
        onClick={onClick}
      />

      <SocialIcons {...{ isSocialOpen }} />

      {isSocialOpen && ReactDOM.createPortal(
        <div
          id="modal_navbar"
          className={styles.transparentModal}
          onClick={onClick}>
        </div>,
      document.getElementById("modals"))}
    </nav>
  );
}

export default NavBar;