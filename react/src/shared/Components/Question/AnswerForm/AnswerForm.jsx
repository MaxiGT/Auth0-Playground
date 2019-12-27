import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit = () => {
    const newAnswer = {
      questionId: this.props.questionId,
      answer: this.state.answer,
    }
    this.props.submit(newAnswer);
    this.setState({
      answer: '',
    });
  }

  render() {
    const answerProps = {
      name: 'answer',
      id: 'answer',
      placeholder: 'Help somebody by giving an answer',
      value: this.state.answer,
      handleChange: (event) => this.handleChange(event),
    };

    const buttonProps = {
      name: 'submit',
      label: 'Submit',
      type: 'submit',
      onClick: this.submit,
    };

    if (!this.props.isAuthenticated) return null;
    return (
      <Fragment>
        <Input {...answerProps} />
        <Button {...buttonProps} />
        <hr className="my-4" />          
      </Fragment>
    );
  }
}

export default withRouter(AnswerForm);