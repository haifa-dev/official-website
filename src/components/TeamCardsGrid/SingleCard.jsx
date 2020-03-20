import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './SingleCard.module.scss';

const SocialLink = ({ link, img: src, alt }) => link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className={styles.cardIcon} />
    </a>
) : null;

const SingleCard = ({ id, img, name, about, githubLink, linkedinLink }) => (
    <div className={styles.card}>
        <img className={styles.cardImg} src={img} alt="member img"></img>
        <Link to={`/profile/${id}`}>
            <span className={styles.cardHeader}>{name}</span>
        </Link>

        <div className={styles.cardContent}>
            <span className={styles.about}>{about}</span>
            <div className={styles.cardIconsRow}>
                <SocialLink
                    link={githubLink}
                    alt="github link"
                    img="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
                />
                <SocialLink
                    link={linkedinLink}
                    alt="linkedin link"
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                />
            </div>
        </div>
    </div>
);


SingleCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    about: PropTypes.string,
    githubLink: PropTypes.string,
    linkedinLink: PropTypes.string
};

export default withRouter(SingleCard);