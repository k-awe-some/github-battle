const id = "480655a960bacc52b2df";
const sec = "42da03364a26b155aab8a5a4080ebf981746130f";
const params = `?client_id=${id}&client_secret=${sec}`;

const getErrorMsg = (message, username) => {
  if (message === "Not Found") {
    return `Ooops... ${username} does not exist. Please enter a valid GitHub username.`;
  }
  return message;
};

const getProfile = username => {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then(res => res.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username));
      }
      return profile;
    });
};

const getRepos = username => {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then(res => res.json())
    .then(repos => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username));
      }
      return repos;
    });
};

const getStarCount = repos => {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
};

const calcScore = (followers, repos) => {
  return followers * 3 + getStarCount(repos);
};

const getUserData = player => {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => {
      return {
        profile,
        score: calcScore(profile.followers, repos)
      };
    }
  );
};

const sortPlayers = players => {
  return players.sort((a, b) => b.score - a.score);
};

export const getResults = players => {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    results => {
      return sortPlayers(results);
    }
  );
};

export const fetchPopularRepos = language => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
};
