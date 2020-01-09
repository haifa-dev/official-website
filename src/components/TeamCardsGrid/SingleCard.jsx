import React from 'react'
import styles from './TeamCardsGrid.module.scss';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gitImage from './GitHub-Mark-32px.png'
import linkedinImage from './linkedin.png'


const SingleCard = (props) => {

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={`${props.img}`} alt="member img"></img>
            <Link to={{
                pathname: `/profile:${props.id}`,
            }}>
                <h2 className={styles.cardHeader}>{props.name}</h2>
            </Link>
            <div className={styles.cardContent}>
                <p>{props.about}</p>
                {props.githubLink ? <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
                    <img src={gitImage} alt="github link" />
                </a> : null}
                {props.linkedinLink ? <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img className={styles.cardIcon} src={linkedinImage} alt="linkedin link" />
                </a> : null}
            </div>
        </div >
    );
}

SingleCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    about: PropTypes.string,
    githubLink: PropTypes.string,
    linkedinLink: PropTypes.string
};

export default withRouter(SingleCard);