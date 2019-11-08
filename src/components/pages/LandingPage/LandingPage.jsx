import React, { useRef, useEffect } from 'react';
import Icon from '@mdi/react'
import { mdiChevronDown } from '@mdi/js';
import styles from './LandingPage.module.scss';

const LandingPage = () => {

    const downIconProps = {
        path: mdiChevronDown,
        title: "scroll down",
        size: 2,
        color: "white"
    }

    var parentRef = useRef(null);

    function handleScroll() {
        if (parentRef.current.scrollTop >= window.innerHeight) {
            parentRef.current.style.scrollSnapType = "none";
        }
        else {
            parentRef.current.style.scrollSnapType = "y mandatory";
        }
    }

    useEffect(() => {
        parentRef.current.addEventListener('scroll', handleScroll, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => parentRef.current.removeEventListener('scroll', handleScroll, false);
    })

    return (
            <div className={styles.parent} ref={parentRef}>
                <div className={styles.mainContainer}>

                    <header id="home">

                        <div className={styles.logo}>
                            <h1>haifa<span>:dev</span></h1>
                            <h2><span>developers</span> community</h2>
                        </div>

                        <div className={styles.hoverCircle}/>

                        <div className={styles.downArrows}>
                            <Icon {...downIconProps}/>
                            <Icon {...downIconProps}/>
                            <Icon {...downIconProps}/>
                        </div>
                    </header>

                    <main id="about">
                        <nav>
                            <a id="homeNav" href="#home">Home</a>
                            <a id="aboutNav" href="#about">About Us</a>
                        </nav>

                        <h1>Developers of Haifa <b>unite!</b></h1>

                        <div className={styles.articles}>

                            <article id="who">
                                <h2>Who are we?</h2>
                                <p>
                                    We're an enthusiastic group of developers from Haifa. Some of us are professionals, some are still learning, but all of us agree upon one thing: Haifa offers barely enough for local developers to thrive.
                                </p>
                                <p>
                                    Nobody wants to move far away from the place they call home just to establish a career. We don't think anyone should. That's why we've established Haife:Dev, so that all of Haifa's developers will have <b>a reason to stay in Haifa</b>.
                                </p>
                            </article>

                            <article id="what">
                                <h2>What do we want?</h2>
                                <p>
                                    We want our careers to thrive in the city we call home.
                                </p>
                                <p>
                                    Our goal is to bring professional software-related content to Haifa <b>for free</b>. We aim to organize meetups and other events that can help developers in Haifa develop their career without the need to leave their home, or travel even farther if the live in the north.
                                </p>

                            </article>

                            <article id="how">
                                <h2>How do we do that?</h2>
                                <p>
                                    We've partnered with <a href="http://www.haifa24.co.il/%D7%91%D7%95%D7%A8%D7%9C%D7%90_17_-_%D7%94%D7%97%D7%9E%D7%9E%D7%94_%D7%9C%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94">Burla 17</a> as a host for our professional meetups. We're bringing professional developers and lectors from all around the country to provide top quality content to our dearest Haifa developers.
                                </p>
                                <p>
                                    For beginners and students, we've partnered with <a href="http://www3.haifa.muni.il/inventuipub/">In-Vent</a> to establish weekly study group meetups in association with the <a href="https://www.freecodecamp.org/">freeCodeCamp</a> non-profit organization.
                                </p>
                            </article>

                        </div>

                    </main>

                </div>
            </div>
    );
}

export default LandingPage;