import React from 'react';
import './Error.scss';

const Error = ({ error }) => {
    console.log(`<error /> rendered! error=${error}`)

    return (
        <div className="Error">
            THere was an error: {error};
            <br />
            Please refresh the page or contact support.
        </div>
    )
}

export default Error;