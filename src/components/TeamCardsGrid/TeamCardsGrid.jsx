import React, { useState, useEffect, useRef } from 'react'

import SingleCard from './SingleCard';
import styles from './TeamCardsGrid.module.scss'


/**
 * Team members cards grid component
 * @version 1.0
 * @author [Roman Serkinskiy](https://github.com/romanserk)
 */

const CardsGrid = () => {

    const [membersList, setMembersList] = useState([{
        id: 1,
        name: "member 1",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    {
        id: 1,
        name: "member 2",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    {
        id: 1,
        name: "member 3",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    }])

    const teamCardsRef = useRef(null);
    const [perLoad] = useState(3);
    const [total, setTotal] = useState(0)
    const [isFetching, setIsFetching] = useState(false);



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
        setTimeout(() => {
            // temporary members data
            const members = [

                {
                    id: 1,
                    name: "member 4",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 5",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 6",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 7",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 8",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 9",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 10",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 11",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 12",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 13",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 14",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 15",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 16",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 17",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 18",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 19",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 20",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 21",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 22",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 23",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
                {
                    id: 1,
                    name: "member 24",
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ornare hendrerit.",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                },
            ]
            const temp = []
            for (let i = total; i < total + perLoad; i++) {
                if (!members[i]) return
                temp.push(members[i]);
            }
            setTotal(total + perLoad);
            setMembersList(membersList => [...membersList, ...temp]);
            setIsFetching(false);
        }, 3500)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // hook listen to isFetching indicator to load more content
    useEffect(() => {
        if (!isFetching) return;
        loadMore();
    }, [isFetching]);




    // TODO: remove temp container div after permanent page embedding
    return (
        <div className={styles.tempContainer}>
            <div className={styles.listContainer} ref={teamCardsRef}>
                {membersList.map((member, index) =>
                    <SingleCard name={member.name} about={member.about} img={member.img} key={`${index}${member.name}`} />
                )}
                {/* fetching more data loading animation*/}
                {isFetching ? <h2 className={styles.animate}>Loading</h2> : null}
            </div>

        </div>

    );
}

export default CardsGrid;

