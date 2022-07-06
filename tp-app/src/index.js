import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    const hello = "Hello react !"

    return (
        <div className='container'>
            <h1>{hello}</h1>
            <p style={{color:'blue'}}>{props.desc}</p>
            <div>
                <label htmlFor='name'>Nom</label>
                <input type='text' id='name'></input>
            </div>
        </div>
    );
}

ReactDOM.render(<App desc="YOPYOP je suis un test ;) !!!!!!!!!" />, document.getElementById('root'));