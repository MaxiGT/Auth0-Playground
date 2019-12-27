import AppRouter from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { raiseError, changeFilter, getQuestions, saveQuestion, getQuestion, setAuth }
	from './store/actions';
import { bindActionCreators } from 'redux';
import { getFilteredQuestions } from './store/selectors';
import { getIsAuthenticated, getProfile } from './auth/auth.selector';

const mapStateToProps = (state) => {
	return {
		questions: getFilteredQuestions(state),
		filter: state.app.filter,
		fetching: state.app.fetching,
		error: state.app.error,
		isAuthenticated: getIsAuthenticated(state),
		userProfile: getProfile(state),
		validatingProfile: state.app.validatingProfile,
	};
}

const dispatchActionsToProps = dispatch => {
  return bindActionCreators(
    {
			getQuestions,
			changeFilter,
			saveQuestion,
			raiseError,
			getQuestion,
			setAuth,
		},
		dispatch
  );
}

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(AppRouter));