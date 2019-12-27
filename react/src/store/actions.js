import * as types from '../constants/actionTypes';
import { URLS, METHOD } from '../constants/endpoints';
import auth0Client from '../auth/auth';

//REQUEST ACTIONS
export const questionsRequest = () => ({ type: types.QUESTIONS_REQUEST });
export const answerRequest = () => ({ type: types.ANSWER_REQUEST });
export const silentAuthRequest = () => ({ type: types.SILENT_AUTH_REQUEST })

//SUCCESS ACTIONS
export const questionsSuccess = (questions) => ({
  type: types.QUESTIONS_SUCCESS,
  payload: questions,
});
export const questionSuccess = (question) => ({
  type: types.QUESTION_SUCCESS,
  payload: question,
});

//ERROR ACTIONS
export const questionsError = (error) => ({
  type: types.QUESTIONS_ERROR,
  payload: error,
});

export const raiseError = (error) => ({
  type: types.RAISE_ERROR,
  payload: error,
});
export const changeFilter = (filter) => ({
	type: types.FILTER_CHANGE,
	payload: filter,
});
export const setAuth = (auth) => ({
  type: types.SET_AUTH,
  payload: auth,
});

export const getQuestions = () => dispatch => {
  dispatch(silentAuthRequest());  
  auth0Client.silentAuth()
    .then(response => {
      dispatch(setAuth(response));
    });
  dispatch(questionsRequest());
	return fetch(URLS.GET_QUESTIONS_URL)
		.then(response => response.json())
		.then(data => dispatch(questionsSuccess(data)))
		.catch(error => dispatch(questionsError(error)));
}

export const getQuestion = (id) => dispatch => {
  dispatch(questionsRequest());
	return fetch(URLS.GET_QUESTIONS_URL + id)
		.then(response => response.json())
		.then(data => dispatch(questionSuccess(data)))
		.catch(error => dispatch(questionsError(error)));
}

export const saveAnswer = (body, token = auth0Client.getIdToken()) => dispatch => {
  dispatch(answerRequest());
  return fetch(URLS.POST_ANSWER_URL + body.questionId, {
    method: METHOD.POST,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(data => dispatch(questionSuccess(data)))
  .catch(error => dispatch(questionsError(error)));
}

export const saveQuestion = (question, token = auth0Client.getIdToken()) => dispatch => {
  dispatch(questionsRequest());
  return fetch(URLS.POST_QUESTION_URL, {
    method: METHOD.POST,
    body: JSON.stringify(question),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(data => dispatch(questionsSuccess(data)))
  .catch(error => dispatch(questionsError(error)));
}
