import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RepoDetailsPage from 'components/pages/RepoDetailsPage/RepoDetailsPage.jsx';
import * as mainActions from 'redux/modules/main/mainActions';

const mapStateToProps = (state) => ({
  currentRepoCommits: state.main.currentRepoCommits,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentRepoCommit: mainActions.getCurrentRepoCommit,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetailsPage);
