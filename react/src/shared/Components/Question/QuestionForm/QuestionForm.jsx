import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextArea from '../../Textarea/TextArea';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      disabled: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm = () => {
    const newQuestion = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.submit(newQuestion);
    this.props.history.push('/');
  }

  render() {

    const titleProps = {
      label: 'Title',
      name: 'title',
      id: 'title',
      disabled: this.state.disabled,
      placeholder: 'Give your question a title',
      handleChange: (event) => this.handleChange(event),
      value: this.state.title,
    };

    const descriptionProps = {
      rows: 5,
      cols: 10,
      id: 'description',
      name: 'description',
      label: 'Description',
      placeholder: 'Give more context to your question',
      handleChange: (event) => this.handleChange(event),
      disabled: this.state.disabled,
      maxLength: 320,
      value: this.state.description,
    };

    const button = {
      disabled: this.state.disabled,
      label: 'Submit',
      name: 'submit',
      onClick: this.submitForm,
      type: 'submit',
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Question</div>
              <div className="card-body text-left">
                <Input {...titleProps } />
                <TextArea {...descriptionProps } />
                <Button {...button} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionForm);