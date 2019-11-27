import React, { Component } from 'react';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  componentDidMount() {
    const score = localStorage.getItem('score');

    if (score) {
      this.setState({ score: JSON.parse(score) });
    }
  }

  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>Concluído</h1>
        <p>Score: ${score}</p>
      </div>
    );
  }
}
