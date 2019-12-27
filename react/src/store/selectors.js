import { createSelector } from 'reselect';

const getQuestion = state => state.app.questions;
const getFilter = state => state.app.filter;

export const getFilteredQuestions = createSelector(
  [getQuestion, getFilter],
  (questions, filter) => 
  questions.filter(q => q.title.toUpperCase().includes(filter.title) ||
    q.description.toUpperCase().includes(filter.description))
);