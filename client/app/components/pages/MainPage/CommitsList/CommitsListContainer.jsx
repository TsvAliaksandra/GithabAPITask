import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CommitsList from 'components/pages/MainPage/CommitsList/CommitsList.jsx';
import * as mainActions from 'redux/modules/main/mainActions';

const mapStateToProps = (state) => ({
  commits: state.main.commits,
  errorMessage: state.main.errorMessage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCommits: mainActions.getCommits,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommitsList);
