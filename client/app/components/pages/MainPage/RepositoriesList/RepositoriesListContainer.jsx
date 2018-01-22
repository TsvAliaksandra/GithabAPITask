import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Repositories from 'components/pages/MainPage/RepositoriesList/RepositoriesList.jsx';
import * as mainActions from 'redux/modules/main/mainActions';

const mapStateToProps = (state) => ({
  repositories: state.main.repositories,
  errorMessage: state.main.errorMessage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRepositories: mainActions.getRepositories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
