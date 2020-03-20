import React, { useEffect, useRef } from 'react';
import SingleCard from './SingleCard';
import styles from './TeamCardsGrid.module.scss';
import { useMembersList } from './useMembersList';

/**
 * Team members cards grid component
 * 
 * @version 1.0
 * @author [Roman Serkinskiy](https://github.com/romanserk)
 * @author [David Klein, Polarts](https://github.com/Polarts)
 */
const CardsGrid = () => {
    const { loadMore, loading, membersList } = useMembersList();
    const teamCardsRef = useRef(null);

    const handleScroll = () => {
        // the last child of the team members list
        const lastLiOffset = teamCardsRef.current.childNodes[teamCardsRef.current.childNodes.length - 2];
        if (!lastLiOffset) {
            return;
        }
        const pageOffset = window.pageYOffset + 550;
        if (lastLiOffset.offsetTop < pageOffset + lastLiOffset.clientHeight) {
            loadMore();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    // TODO: remove temp container div after permanent page embedding
    return (
        <div className={styles.container}>
            <div className={styles.listContainer} ref={teamCardsRef}>
                {membersList.map(member => <SingleCard key={member.id} {...member} />)}
            </div>
            {/* fetching more data loading animation*/}
            {loading && <span className={styles.animate}>Loading</span>}
        </div>

    );
}

export default CardsGrid;
