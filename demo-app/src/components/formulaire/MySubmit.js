import React from 'react';

function MySubmit(props) {
    return (
        <button type='Submit' style={{padding: '6px 10px', border: 'solid 1px #333', borderRadius: '6px'}}>{props.label}</button>
    );
}

export default MySubmit;