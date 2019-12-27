import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionDetail from './QuestionDetail';
import Spinner from '../Spinner/Spinner';

class Question extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    if (!this.props.selectedQuestion || 
      (this.props.selectedQuestion && this.props.selectedQuestion.id !== parseInt(params.questionId))) {
      this.props.getQuestion(params.questionId);
    }
  }

  render() {
    return (
      <div>
        <Spinner loading={this.props.fetching} size={'lg'}>
          {this.props.selectedQuestion && (<QuestionDetail 
            question={this.props.selectedQuestion} 
            isAuthenticated={this.props.isAuthenticated}
            saveAnswer={this.props.saveAnswer}/>)}
        </Spinner>
      </div>
    );
  }
}

Question.propTypes = {
  getQuestion: PropTypes.func,
}

export default Question;