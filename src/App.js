import React from 'react';
import Listings from './components/Listings'
import './App.css';
import data from './data/data.json';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: data,
      filters: []
    }
  }

  render() {
    return (
      <div>
        <Listings jobs={this.state.jobs} filters={this.state.filters} />
      </div>
    )

  }
}

export default App;