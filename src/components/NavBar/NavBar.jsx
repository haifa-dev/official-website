import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const SocialIcons = ({ isSocialOpen }) => (
  <div
    className={styles.externalLinks}
    style={isSocialOpen ? { display: "flex" } : null}
  >
    <a
      href="https://www.facebook.com/groups/haifadev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://www.facebook.com/images/fb_icon_325x325.png"
        alt="Facebook"
      />
    </a>
    <a
      href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png"
        alt="WhatsApp"
      />
    </a>
    <a
      href="https://www.meetup.com/Haifa-dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png"
        alt="Meetup"
      />
    </a>
  </div>
);

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
      <Link id="homeNav" to={{ pathname: "/", hash: "#home", state: "home" }}>
        <span>Home</span>
      </Link>

      <Link
        id="aboutNav"
        className={styles.aboutNav}
        to={{ pathname: "/", hash: "#about", state: "about" }}
      >
        <span>About Us</span>
      </Link>

      <Link
        id="contactNav"
        to={{ pathname: "/", hash: "#contact", state: "contact" }}
      >
        <span>Contact</span>
      </Link>

      <Link
        id="teamNav"
        className={styles.teamNav}
        to={{ pathname: "/", hash: "#team", state: "team" }}
      >
        <span>Our Team</span>
      </Link>

      <Link to="/ProjectRequest">Request project</Link>
      
      <Link to="/Projects">Projects</Link>

      <img
        className={styles.socialButton}
        src={require("../../img/social-icon.png")}
        alt="Social"
        onClick={onClick}
      />

      <SocialIcons {...{ isSocialOpen }} />

      {isSocialOpen &&
        ReactDOM.createPortal(
          <div
            id="modal_navbar"
            className={styles.transparentModal}
            onClick={onClick}
          ></div>,
          document.getElementById("modals")
        )}
    </nav>
  );
};

export default NavBar;
