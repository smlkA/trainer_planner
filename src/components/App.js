import React, { Component } from 'react';
import Form from './Form';
import Calendar from './Calendar';
import '../style/App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {calendar:''};
  }

  render() {
    return (
      <div>
        <Form />
        <Calendar />

      </div>

    );
  }
}

export default App;
