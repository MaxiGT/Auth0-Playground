import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import ErrorBoundary from './shared/Components/ErrorBoundary/ErrorBoundary'
import Spinner from './shared/Components/Spinner/Spinner';
import Navbar from './shared/Components/Navbar/Navbar';
import { navBarConfig } from './shared/Components/Navbar/config';
// import Footer from './shared/Components/Footer/Footer';
import List from './shared/Components/List/List';
import Question from './shared/Components/Question/Question.container';
import Callback from './auth/callback.container';
import Guard from './auth/guard';
import QuestionForm from './shared/Components/Question/QuestionForm/QuestionForm';
import './index.css';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    const { fetching, questions, error, filter } = this.props;
    this.state = {
      fetching,
      questions,
      error,
      filter,
    };
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  componentWillReceiveProps(props) {
    const { questions } = props;
    if (_.isEqual(questions, this.state.questions)) return null;
    this.setState({ questions });
  }

  render() {
  const list = () => <List questions={this.state.questions}/>;
  const question = () => <Question getQuestion={this.props.getQuestion}/>;
  const questionForm = () => <QuestionForm submit={this.props.saveQuestion}/>;

    return (
      <React.Fragment>
        <Navbar userProfile={this.props.userProfile} isAuthenticated={this.props.isAuthenticated}
          signOut={this.props.setAuth} config={navBarConfig} />
        <ErrorBoundary error={this.state.error} raiseError={this.props.raiseError}>
          <Spinner size={'lg'} loading={this.state.fetching}>
            <div className="App">
              <Switch>
                <Route exact path="/" component={list} />
                <Route exact path="/question/:questionId" component={question} />
                <Route exact path="/callback" component={Callback} />
                <Guard path="/new-question"
                  component={questionForm}
                  isAuthenticated={this.props.isAuthenticated}
                  validatingProfile={this.props.validatingProfile} />
              </Switch>
            </div>
          </Spinner>
        </ErrorBoundary>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default AppRouter;
