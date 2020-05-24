import React from 'react';
import Listings from './components/Listings';
import Filters from './components/Filters';
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

  addPillToFilters = pillName => {
    if (this.state.filters.indexOf(pillName) === -1) {
      this.setState({
        filters: [...this.state.filters, pillName]
      });
    }

    console.log(this.state.filters);
  }

  render() {
    return (
      <div>
        <div className="contentWrapper">
          <Filters filters={this.state.filters} />
          <Listings jobs={this.state.jobs} filters={this.state.filters} addPillToFilters={this.addPillToFilters} />
        </div>
      </div>
    )

  }
}

export default App;