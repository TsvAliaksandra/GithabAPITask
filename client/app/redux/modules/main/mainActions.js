import MAIN_CONSTANTS from 'redux/modules/main/mainActionConstants';
import URL_CONSTANTS from 'components/helper/GithabUrlsConstants';
import axios from 'axios';

export const getRepositories = () => dispatch => {
  axios
    .get(URL_CONSTANTS.REPOSITORY)
    .then(
      (res) => {
        const reposName = res.data.map(item => {
          return {
            id: item.id,
            name: item.name,
            full_name: item.full_name,
          };
        });

        return dispatch({
          type: MAIN_CONSTANTS.GET_REPOSITORIES,
          payload: reposName,
        });
      },
      (err) => (
        dispatch({
          type: MAIN_CONSTANTS.ERROR,
          payload: 'Too many requests',
        })
      )
    );
};

export const getCommits = () => dispatch => {
  axios
    .get(`${URL_CONSTANTS.COMMITS_URL}${URL_CONSTANTS.REPOSITORY_NAME}${URL_CONSTANTS.COMMITS_100}`)
    .then(
      (res) => {
        const commits = res.data.map(item => item.sha);

        return dispatch({
          type: MAIN_CONSTANTS.GET_COMMITS,
          payload: commits,
        });
      },
      (err) => (
        dispatch({
          type: MAIN_CONSTANTS.ERROR,
          payload: 'Too many requests',
        })
      )
    );
};

export const getCurrentRepoCommit = (repositoryName) => dispatch => {
  axios
    .get(`${URL_CONSTANTS.COMMITS_URL}${repositoryName}${URL_CONSTANTS.COMMITS}`)
    .then(
      (res) => {
        const currentRepoCommits = res.data.map(item => {
          return {
            sha: item.sha,
            authorName: item.commit.author.name,
            email: item.commit.author.email,
            date: item.commit.author.date,
            authorAvatar: (item.author && item.author.avatar_url) || '',
            message: item.commit.message,
          };
        });

        return dispatch({
          type: MAIN_CONSTANTS.GET_CURRENT_COMMIT,
          payload: currentRepoCommits,
        });
      },
      (err) => (
        dispatch({
          type: MAIN_CONSTANTS.ERROR,
          payload: 'Too many requests',
        })
      )
    );
};
