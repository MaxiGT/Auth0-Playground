import InitialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = InitialState, action) => {
	switch(action.type) {
		case types.SILENT_AUTH_REQUEST:
			return { ...state, validatingProfile: true}
		case types.SET_AUTH:
			return { ...state, auth: action.payload, validatingProfile: false };
		case types.QUESTIONS_REQUEST:
			return { ...state, fetching: true };
		case types.QUESTIONS_SUCCESS:
			return { ...state, fetching: false, questions: action.payload };
		case types.QUESTIONS_ERROR:
			return { ...state, fetching: false, error: action.payload.error };
		case types.QUESTION_SUCCESS:
			return { ...state, fetching: false, selectedQuestion: action.payload }
		case types.FILTER_CHANGE:
			return { ...state, filter: action.payload.filter };
		case types.RAISE_ERROR:
			return {...state, error: action.payload.error };
		default:
			return {...state };
	}
};