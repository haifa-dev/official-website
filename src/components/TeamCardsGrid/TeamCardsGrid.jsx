import React, { useState, useEffect, useRef } from 'react'
import { getMembersAsync } from '../../services/members.service';
import SingleCard from './SingleCard';
import styles from './TeamCardsGrid.module.scss';


/**
 * Team members cards grid component
 * 
 * @version 1.0
 * @author [Roman Serkinskiy](https://github.com/romanserk)
 * @author [David Klein, Polarts](https://github.com/Polarts)
 */

const CardsGrid = () => {

    // #region members

    const [membersList, setMembersList] = useState([])

    // #endregion

    const teamCardsRef = useRef(null);
    
    const [perPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [isFetching, setIsFetching] = useState(true);
    const [isDoneFetching, setIsDoneFetching] = useState(false);


    const handleScroll = () => {
        // the last child of the team members list
        var lastLiOffset = teamCardsRef.current.childNodes[teamCardsRef.current.childNodes.length - 2];
        var pageOffset = window.pageYOffset + 550;
        if (lastLiOffset?.offsetTop < pageOffset + lastLiOffset?.clientHeight) {
            setIsFetching(true);
        }
    };

    const loadMore = async () => {
        var res = await getMembersAsync({perPage: perPage, page: currentPage});
        if (res) {
            setCurrentPage(currentPage + 1);
            setMembersList(membersList => [...membersList, ...res]);
            setIsFetching(false);
        }
        else {
            window.removeEventListener('scroll', handleScroll);
            setIsDoneFetching(true);
        }
    }

    // Init effect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);
        return () =>  window.removeEventListener('scroll', handleScroll);
    }, [])

    // hook listen to isFetching indicator to load more content
    useEffect(() => {
        if (isFetching) {
            (async () => await loadMore())();
        }
    }, [isFetching]);




    // TODO: remove temp container div after permanent page embedding
    return (
        <div className={styles.container}>
            <div className={styles.listContainer} ref={teamCardsRef}>
                {membersList.map((member, index) =>
                    <SingleCard
                        id={member.id}
                        name={member.name}
                        about={member.about}
                        img={member.img}
                        githubLink={member.githubLink}
                        linkedinLink={member.linkedinLink}
                        key={`${index}${member.name}`}
                    />
                )}
            </div>
            {/* fetching more data loading animation*/}
            {isDoneFetching? null : isFetching ? <span className={styles.animate}>Loading</span> : null}
        </div>

    );
}
export default CardsGrid;

