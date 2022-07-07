import React from 'react';

function MyInput(props) {
    return (
        <div style={{padding: '5px'}}>
            <label htmlFor='{props.id}' style={{fontWeight: 'bold'}}>{props.label}</label>
            <input type='{props.type}' id='{props.id}' style={{borderRadius: '5px', padding: '4px', border: 'solid 1px #333', marginLeft: '5px'}}></input>
        </div>
    );
}

export default MyInput;