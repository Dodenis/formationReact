import React from 'react';

function Avatar(props) {
    return (
        <a className="avatar">
            <img src={props.src} />
        </a>
    );
}

export default Avatar;