import React from 'react';
import Date from './Date';
import Rating from './Rating';

function Metadata(props) {
    return (
        <div className="metadata">
            <Date value={props.date} />
            <Rating value={props.rating} />
        </div>
    );
}

export default Metadata;