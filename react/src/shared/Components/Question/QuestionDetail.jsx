import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AnswerForm from './AnswerForm/AnswerForm';

const QuestionDetail = (props) => {
  const { question, saveAnswer, isAuthenticated } = props;
  return(
    <div className="container">
      <div className="row">
        <Link to="/new-question">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Need help? Ask here!</div>
            <div className="card-body">
              <h4 className="card-title">+ New Question</h4>
              <p className="card-text">Don't worry. Help is on the way!</p>
            </div>
          </div>
        </Link>
        <div className="jumbotron col-12">
          <h1 className="display-3">{question.title}</h1>
          <p className="lead">{question.description}</p>
          <hr className="my-4" />
          <AnswerForm
            submit={saveAnswer}
            isAuthenticated={isAuthenticated}
            questionId={question.id}/>
          <p>Answers:</p>
          {
            question.answers.map((answer, idx) => (
              <p className="lead" key={idx}>{idx+1} - {answer.answer}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

QuestionDetail.propTypes = {
  question: PropTypes.object,
}

export default QuestionDetail;