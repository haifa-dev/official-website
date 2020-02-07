
const members = [

    {
        id: 0,
        name: "David Klein",
        about: "Founder of Haifa:Dev, Front-End Engineer, and project director of the Haifa:Dev website.",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQHcOISNKjdNag/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=fZ1fTcW-A-a91oIq2BPRrE3APpE_2yvY83mP-m6y25Q",
        githubLink: "https://github.com/Polarts",
        linkedinLink: "https://www.linkedin.com/in/david-klein-835048161/"
    },
    {
        id: 1,
        name: "Guy Sarkinsky",
        about: "Founder and organizer of Haifa:Dev. Full-stack developer.",
        img: "https://secure.meetupstatic.com/photos/member/9/f/c/c/highres_296680908.jpeg",
        githubLink: "https://github.com/GuySarkinsky",
        linkedinLink: "https://www.linkedin.com/in/sergey-sarkinsky/"
    },
    {
        id: 2,
        name: "Tomer Matmon",
        about: "Aspiring web developer. Founder of Haifa:Dev developer’s community.",
        img: "https://secure.meetupstatic.com/photos/member/a/c/d/highres_295322765.jpeg",
        githubLink: "https://github.com/Tomer51m",
        linkedinLink: "https://www.linkedin.com/in/tomermatmon/"
    },
];

// #region get functions

/**
 * Gets the members, filters with a query object.
 * @author [David Klein, Polarts](https://github.com/Polarts)
 * 
 * @param {Number} perPage the number of members per page
 * @param {Number} page the current page index, starting with 0
 * @param {Number} id the id to get
 * @param {String} name the name to search
 * 
 * @return promise of an array of members, enclosed in pagination.
 */
export const getMembersAsync = ({ perPage, page, id, name }) => new Promise((result) => {

    if (id) {
        result(members.find(m => m.id === id)[0]);
    }
    
    if (name) {
        result(members.find(m => m.name.includes(name)));
    }

    if (!page) {
        page = 0;
    }

    if (!perPage) {
        perPage = members.length;
    }

    // calculate the index at which we should start getting items.
    var startIndex = page * perPage;

    if (startIndex > members.length) {
        //setTimeout(() => result(members), 3500);
        result(false);
    }
    else {
        setTimeout(() => result(members.slice(startIndex, startIndex + perPage)), 1500);
    }

});

// #endregion

