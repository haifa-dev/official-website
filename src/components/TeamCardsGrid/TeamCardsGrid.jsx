import React, { useReducer, useState, useEffect, useRef } from 'react'
import { getMembersAsync } from '../../services/members.service';
import SingleCard from './SingleCard';
import styles from './TeamCardsGrid.module.scss';


/**
 * Team members cards grid component
 * @version 1.0
 * @author [Roman Serkinskiy](https://github.com/romanserk)
 */

const CardsGrid = () => {

    // #region members

    const [membersList, setMembersList] = useState([])

    // #endregion

    const teamCardsRef = useRef(null);
    
    const [perPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);
    const [isFetching, setIsFetching] = useState(true);


    const handleScroll = () => {
        // the last child of the team members list
        var lastLiOffset = teamCardsRef.current.childNodes[teamCardsRef.current.childNodes.length - 2];
        var pageOffset = window.pageYOffset + 550;
        if (lastLiOffset.offsetTop < pageOffset + lastLiOffset.clientHeight) {
            setIsFetching(true);
        } else { return }
    };

    const loadMore = async () => {
        // TODO: remove timeout on fetching real data
        // setTimeout(() => {
        //     // temporary members data
        //     // const members = 
        //     const temp = []
        //     for (let i = total; i < total + perLoad; i++) {
        //         if (!members[i]) return
        //         temp.push(members[i]);
        //     }
        //     setTotal(total + perLoad);
        //     setMembersList(membersList => [...membersList, ...temp]);
        //     setIsFetching(false);
        // }, 3500)
        setCurrentPage(currentPage + 1);
        var res = await getMembersAsync({perPage, page: currentPage});
        setMembersList(membersList => [...membersList, ...res]);
    }

    // Init effect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // hook listen to isFetching indicator to load more content
    useEffect(() => {
        if (!isFetching) return;
        (async () => await loadMore())();
    }, [isFetching]);




    // TODO: remove temp container div after permanent page embedding
    return (
        <>
            <div className={styles.tempContainer}>
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
                {isFetching ? <span className={styles.animate}>Loading</span> : null}
            </div>
        </>

    );
}
export default CardsGrid;

