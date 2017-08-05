import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      fields: {}
    };
  }

  onSubmit = (fields) => {
    this.setState({fields});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
