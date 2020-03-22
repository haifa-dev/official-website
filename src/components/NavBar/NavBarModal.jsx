import React from 'react';
import ReactDOM from 'react-dom';
import styles from './NavBarModal.module.scss';

const NavBarModal = (props) => {
    
    return props.open ? ReactDOM.createPortal(
        <div id="modal_navbar" className={styles.transparentModal} onClick={props.onClose}>
        </div>,
        document.body
    ): null;
}

export default NavBarModal;