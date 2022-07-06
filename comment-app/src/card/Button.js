import React from 'react';

function Button(props) {
    return (
        <div className={"ui basic button " + props.color}>{props.label}</div>
    );
}

export default Button;