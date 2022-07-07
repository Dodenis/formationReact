import React from 'react';
import Header from './Header';
import Content from './Content';

function App(props) {
    return (
        <div className='container'>
            <Header hello="Hello React !" />
            <Content desc={props.desc} />
        </div>
    );
}

export default App;