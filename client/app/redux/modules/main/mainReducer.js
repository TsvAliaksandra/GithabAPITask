import MAIN_CONSTANTS from 'redux/modules/main/mainActionConstants';

const defaultState = {
  repositories: [],
  commits: [],
  currentRepoCommits: [],
  errorMessage: '',
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case MAIN_CONSTANTS.GET_REPOSITORIES:
      return handleGetRepositories(state, action.payload);

    case MAIN_CONSTANTS.GET_COMMITS:
      return handleGetCommits(state, action.payload);

    case MAIN_CONSTANTS.GET_CURRENT_COMMIT:
      return handleGetCurrentRepoCommit(state, action.payload);

    case MAIN_CONSTANTS.ERROR:
      return handleCatchError(state, action.payload);

    default:
      return state;
  }
}

function handleGetRepositories(state, repositories) {
  return {...state, repositories};
}

function handleGetCommits(state, commits) {
  return {...state, commits};
}

function handleGetCurrentRepoCommit(state, currentRepoCommits) {
  return {...state, currentRepoCommits};
}

function handleCatchError(state, errorMessage) {
  return {...state, errorMessage};
}
