import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { CardList, GitForm } from './card/Card'

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState((prevState) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="col-12">
          <GitForm onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
