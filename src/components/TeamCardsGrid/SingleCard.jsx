import React from 'react'
import styles from './TeamCardsGrid.module.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const SingleCard = (props) => {

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={`${props.img}`} alt="member img"></img>
            <h3 className={styles.cardHeader}>{props.name}</h3>
            <div className={styles.cardContent}>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

SingleCard.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    about: PropTypes.string
};

export default withRouter(SingleCard);