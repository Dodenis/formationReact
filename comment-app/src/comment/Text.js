import React from 'react';

function Text(props) {
    return (
        <div className="text">
            {props.value}
        </div>
    );
}

export default Text;