import React from 'react';

function Rating(props) {
    return (
        <div className="rating">
            <i className="star icon"></i>
           {props.value}
        </div>
    );
}

export default Rating;