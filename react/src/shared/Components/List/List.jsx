import React, { Component } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row newQuestionContainer'>
          <Link to="/new-question">
            <Button 
              type={'button'}
              className={'btn btn-secondary btn-lg'}
              name={'newQuestion'}
              label={'+ New Question'} />
          </Link>
        </div>
        <div className='row'>
          {this.props.questions.map((q) => 
            <Card key={q.id} question={q}/>
          )}
        </div>
      </div>
    );
  }
}

export default List;