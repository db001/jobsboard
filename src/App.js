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

  componentDidMount() {
    const sortedJobs = this.sortFeaturedJobs(this.state.jobs);
    const filteredJobs = this.filterJobs(sortedJobs, this.state.filters);

    this.setState({
      jobs: filteredJobs
    })
  }

  addPillToFilters = pillName => {
    if (this.state.filters.indexOf(pillName) === -1) {
      this.setState({
        filters: [...this.state.filters, pillName]
      }, () => {
        console.log(this.state.filters);
        this.filterJobs(this.state.jobs, this.state.filters);
      });
    }
  }

  sortFeaturedJobs = array => {
    let featuredJobs = [];
    let notFeaturedJobs = [];

    array.map(job => {
      if (job.featured) {
        featuredJobs.push(job);
      } else {
        notFeaturedJobs.push(job);
      }
      return null;
    });

    const sortedJobs = [...featuredJobs, ...notFeaturedJobs];
    return sortedJobs;
  }

  filterJobs = (jobsArr, filtersArr) => {
    if (filtersArr.length === 0) {
      return jobsArr;
    }

    const filteredList = jobsArr.filter(listing => {
      return filtersArr.indexOf(listing.role) !== -1 ||
        filtersArr.indexOf(listing.level) !== -1 ||
        listing.languages.some(language => this.state.filters.includes(language)) ||
        listing.tools.some(tool => this.state.filters.includes(tool))
    });

    this.setState({
      jobs: filteredList
    })

    return filteredList;
  }

  render() {
    return (
      <div>
        <div className="contentWrapper">
          <Filters filters={this.state.filters} />
          <Listings jobs={this.state.jobs} addPillToFilters={this.addPillToFilters} />
        </div>
      </div>
    )
  }
}

export default App;