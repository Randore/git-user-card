import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  const style = {
    border: "1px solid #ddd",
    boxShadow: "1px 2px 6px 0px #dcdcdc"
  }
  return(
    <li style={style} className="media mb-3 p-2 rounded">
      <img className="mr-3 " width="90" height="90" src={props.avatar_url} alt="image" />
      <div className="media-body">
        <h5 className="m-0">{props.name}</h5>
        <small className="m-0">{props.bio}</small>
        <div className="media bg-white mt-1 border-top border-grey">
          <div className="media-body p-1 d-inline-flex">
            <div className="m-0 mr-2 pr-2 border-right border-grey">
              <small>Followers:</small> <span className="badge badge-primary">{props.followers}</span>
            </div>
            <div className="m-0 mr-2">
              <small>Following:</small> <span className="badge badge-primary">{props.following}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export class GitForm extends Component {
  state = {
    userName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((resp) => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      });
  }

  render() {
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
  <input onChange={(event) => this.setState({ userName: event.target.value })} type="text" className="form-control" placeholder="Github username" required />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary purple" type="submit">Show Card</button>
  </div>
</div>
      </form>
     
    );
  }
};

export const CardList = (props) => {
  return(
    <ul className="p-0">
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </ul>
  );
};