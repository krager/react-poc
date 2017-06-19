import React from 'react';
import './CardPanel.css';

const Card = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.published}</div>
    </div>
  );
};

const CardPanel = (props) => {
    return (
      <div className="card-panel">
       {props.cards.map(card => <Card {...card} />)}
      </div>
  );
}

export default CardPanel;