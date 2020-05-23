import React from 'react';
import Listing from '../Listing';

const Listings = (props) => {

    let featuredJobs = [];
    let notFeaturedJobs = [];

    props.jobs.map(job => {
        if (job.featured) {
            featuredJobs.push(job);
        } else {
            notFeaturedJobs.push(job);
        }
        return null;
    });

    const sortedJobs = [...featuredJobs, ...notFeaturedJobs]

    return (
        <div>
            Listings
            <ul>
                {sortedJobs.map(job => {
                    return <Listing key={job.id} details={job} />
                })}
            </ul>
        </div>
    )
}

export default Listings;