import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { id, answers, title, description } = this.props.question;
    return(
      <div key={id} className="col-sm-12 col-md-4 col-lg-3">
        <Link to={`/question/${id}`}>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Answers: {answers}</div>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;