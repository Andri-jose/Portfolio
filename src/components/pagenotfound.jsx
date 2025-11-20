import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Go back to Home
        </Link>
    </div>
);

export default PageNotFound;