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
  }

  render() {
    var submitMessage;
    if (this.state.fields.businessEmail) {
      submitMessage = <div className="alert alert-success" role="alert">
        <strong>Thank you for signing up!</strong> A confirmation email has been sent to {this.state.fields.businessEmail}.
      </div>
    }
    return (
      <div className="App">
        {submitMessage}
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
