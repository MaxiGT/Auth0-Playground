import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Question from './Question';
import { bindActionCreators } from '../../../../node_modules/redux';
import { saveAnswer } from '../../../store/actions';
import { getIsAuthenticated } from '../../../auth/auth.selector';

const mapStateToProps = (state, props) => {
	return {
		selectedQuestion: state.app.selectedQuestion,
		fetching: state.app.fetching,
		isAuthenticated: getIsAuthenticated(state),
	};
}

const dispatchActionsToProps = dispatch => {
	return bindActionCreators({
		saveAnswer,
	}, dispatch)
}

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(Question));