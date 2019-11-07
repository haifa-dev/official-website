import React from 'react';
import Icon from '@mdi/react'
import { mdiChevronDown } from '@mdi/js';
import styles from './LandingPage.module.scss';

const LandingPage = () => {

    return (
        <div className={styles.mainContainer}>

            <header>

                <div className={styles.logo}>
                    <h1>haifa<span>:dev</span></h1>
                    <h2><span>developers</span> community</h2>
                </div>

                <div className={styles.hoverCircle}/>

                <div className={styles.downArrows}>
                    <Icon 
                        path={mdiChevronDown}
                        title="scroll down"
                        size={2}
                        color="white"/>
                     <Icon 
                        path={mdiChevronDown}
                        title="scroll down"
                        size={2}
                        color="white"/>
                     <Icon 
                        path={mdiChevronDown}
                        title="scroll down"
                        size={2}
                        color="white"/>        
                </div>

            </header>

            <main>
                
            </main>

        </div>
    );
}

export default LandingPage;