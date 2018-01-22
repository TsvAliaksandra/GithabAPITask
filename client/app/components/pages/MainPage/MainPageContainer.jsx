import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainPage from 'components/pages/MainPage/MainPage.jsx';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
