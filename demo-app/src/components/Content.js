import React from 'react';
import MyForm from './formulaire/MyForm';
import Description from './Description';

function Content(props) {
    return (
        <div>
            <Description desc={props.desc} />
            <MyForm />
        </div>
    );
}

export default Content;