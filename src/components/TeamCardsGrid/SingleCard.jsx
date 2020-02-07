import React from 'react'
import styles from './SingleCard.module.scss';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SingleCard = (props) => {

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={props.img} alt="member img"></img>
            {/* <Link to={{
                pathname: `/profile:${props.id}`,
            }}> */}
                <span className={styles.cardHeader}>{props.name}</span>
            {/* </Link> */}
            <div className={styles.cardContent}>
                <span className={styles.about}>{props.about}</span>
                <div className={styles.cardIconsRow}>
                    {props.githubLink ? <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
                        <img className={styles.cardIcon} src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png" alt="github link" />
                    </a> : null}
                    {props.linkedinLink ? <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img className={styles.cardIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin link" />
                    </a> : null}
                </div>
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