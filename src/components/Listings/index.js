import React from 'react';
import Listing from '../Listing';
import './style.css';

const Listings = (props) => {
    if (props.jobs.length === 0) {
        return <div className="noResults">Sorry, no job listings match your filters</div>
    } else {
        return (
            <div className="listingsWrapper" >
                <ul>
                    {
                        props.jobs.map(job => {
                            return <Listing key={job.id} details={job} addPillToFilters={props.addPillToFilters} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Listings;