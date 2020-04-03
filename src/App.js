import React, { Component } from 'react';
import Button from './components/Button'
import Counter from './components/Counter'
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  handleClick = (e) => {
    const { count } = this.state
    e.preventDefault()
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state
    const propsBtn = {
      classes: 'btn-dwa',
      content: 'Count',
      onClick: this.handleClick
    }

    return (
      <>
        <Button {...propsBtn} />
        <Counter content={count} />
      </>
    );
  }
}

export default App;
