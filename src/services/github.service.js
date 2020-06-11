const URL = "https://api.github.com";
const USERNAME = "haifa-dev";

export async function getRepoAsync(repoName) {
  try {
    let response = await fetch(`${URL}/repos/${USERNAME}/${repoName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    });
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getRepoContributersAsync(repoName) {
  try {
    let response = await fetch(
      `${URL}/repos/${USERNAME}/${repoName}/contributors`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
          Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      }
    );
    let data = await response.json();
    console.log(data)
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getUserReposAsync(userName) {
  try {
    let response = await fetch(`${URL}/users/${userName}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      }
    });
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
