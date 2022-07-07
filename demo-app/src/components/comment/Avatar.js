import React from 'react';

function Avatar(props) {
    return (
        <a class="avatar">
            <img src="{props.src}" />
        </a>
    );
}

export default Avatar;