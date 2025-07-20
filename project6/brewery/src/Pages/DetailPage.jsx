import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function DetailPage(props) {
    const { id } = useParams();
    const location = useLocation();
    const brewery = location.state?.brewery; // or whatever object you passed

    return (
        <div>
        <h1>Detail Page</h1>
        <p>ID from URL: {id}</p>

        {brewery ? (
            <div>
                <h2>{brewery.name}</h2>
                <p><strong>Type:</strong> {brewery.brewery_type || 'N/A'}</p>
                <p><strong>Address 1:</strong> {brewery.address_1 || 'N/A'}</p>
                <p><strong>Address 2:</strong> {brewery.address_2 || 'N/A'}</p>
                <p><strong>Address 3:</strong> {brewery.address_3 || 'N/A'}</p>
                <p><strong>City:</strong> {brewery.city || 'N/A'}</p>
                <p><strong>State:</strong> {brewery.state || brewery.state_province || 'N/A'}</p>
                <p><strong>Postal Code:</strong> {brewery.postal_code || 'N/A'}</p>
                <p><strong>Country:</strong> {brewery.country || 'N/A'}</p>
                <p><strong>Phone:</strong> {brewery.phone || 'N/A'}</p>
                <p>
                    <strong>Website:</strong>{' '}
                    {brewery.website_url ? (
                    <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                        {brewery.website_url}
                    </a>
                    ) : (
                    'N/A'
                    )}
                </p>
            </div>
        ) : (
            <p>No detail data passed via state. You might want to fetch it using the ID.</p>
        )}
        </div>
    );
}

export default DetailPage;
