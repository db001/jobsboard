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
        this.filterJobs(this.state.jobs, this.state.filters);
      });
    }
  }

  removeFilter = filterName => {
    const newFilters = this.state.filters.filter(text => text !== filterName);
    this.setState({
      filters: newFilters
    }, () => {
      this.filterJobs(data, this.state.filters);
    });
  }

  clearFilters = () => {
    this.setState({
      filters: []
    }, () => {
      this.filterJobs(data, this.state.filters);
    })
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
      this.setState({
        jobs: jobsArr
      });
      return jobsArr;
    }

    const filteredList = jobsArr.filter(listing => {
      const arrayOfAttributes = [listing.role, listing.level, ...listing.languages, ...listing.tools];
      return filtersArr.every(attribute => arrayOfAttributes.indexOf(attribute) !== -1);
    });

    this.setState({
      jobs: filteredList
    })

    return filteredList;
  }

  render() {
    return (
      <div className="appWrapper">
        <div className="topBanner"></div>
        <div className="contentWrapper">
          <Filters filters={this.state.filters} removeFilter={this.removeFilter} clearFilters={this.clearFilters} />
          <Listings jobs={this.state.jobs} addPillToFilters={this.addPillToFilters} />
        </div>
      </div>
    )
  }
}

export default App;