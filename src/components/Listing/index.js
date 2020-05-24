import React, { Component } from 'react';
import Pill from '../Pill';
import './style.css';

export class Listing extends Component {
    render() {
        const { company, contract, featured, languages, level, location, logo, newJob, position, postedAt, role, tools } = this.props.details;

        const pillsArray = [role, level, ...languages, ...tools]

        return (
            <div className="listing">
                <div className="jobDetails">
                    <div className="listingImage">
                        <img alt="Company Logo" src={logo} />
                    </div>
                    <div className="detailsContainer">
                        <div className="detailPrefix">
                            <span>{company}</span>
                            {newJob ? <span>New</span> : ''}
                            {featured ? <span>Featured</span> : ''}
                        </div>
                        <div className="jobTitle">
                            <h3>{position}</h3>
                        </div>
                        <div className="detailsSuffix">
                            <span>{postedAt}</span>
                            <span>{contract}</span>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
                <ul className="pillsContainer">
                    {pillsArray.map((pill, index) => {
                        return <Pill key={index} text={pill} addPillToFilters={this.props.addPillToFilters} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Listing;
