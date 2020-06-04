
/**
 * @typedef {object} Member
 * @property {number} id
 * @property {string} name
 * @property {string} about
 * @property {string} img
 * @property {string} [githubLink]
 * @property {string} [linkedinLink]
 */

/**
 * Get members in a paginated manner
 * 
 * @param {number} perPage the number of members per page
 * @param {number} page the current page index, starting with 0
 * 
 * @return {Promise<Member[]>} of an array of members
 */
export async function getMembers({ perPage = members.length, page = 0 } = {}) {
  const startIndex = page * perPage;

  if (startIndex > members.length) {
    return [];
  }
  return members.slice(startIndex, startIndex + perPage);
};

/**
 * Find a member by id
 * 
 * @param {number} id the id to get
 *
 * @return {Promise<Member>} of member if exists, otherwise null
 */
export async function getMemberById(id) {
  return members.find(m => m.id === id)[0] || null;
}

/**
 * Search members by their name
 * 
 * @param {string} name the name to search
 *
 * @return {Promise<Member[]>} array of fitting members. empty array if none found
 */
export async function searchMembersByName(name) {
  name = name.toLowerCase();
  return members.find(m => m.name.toLowerCase().includes(name));
}

// #endregion

/**
 * @type Member[]
 */
const members = [
  {
    id: 0,
    name: "David Klein",
    about: "Founder of Haifa:Dev, Front-End Engineer, and project director of the Haifa:Dev website.",
    img: "https://secure.meetupstatic.com/photos/member/4/2/4/7/highres_295336967.jpeg",
    githubLink: "https://github.com/Polarts",
    linkedinLink: "https://www.linkedin.com/in/david-klein-835048161/",
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
