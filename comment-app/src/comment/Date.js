import React from 'react';

function Date(props) {
    return (
        <div className="metadata">
            <span className="date">{props.value}</span>
        </div>
    );
}

export default Date;