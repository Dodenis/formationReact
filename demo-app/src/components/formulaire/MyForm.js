import React from 'react';
import MyInput from './MyInput';
import MySubmit from './MySubmit';

function MyForm(props) {
    return (
        <form>
            <MyInput type='text' id='lastName' label='Mon nom :'/>
            <MyInput type='text' id='firstName' label='Mon prenom :'/>
            <MyInput type='date' id='naiss' label='Naissance :'/>
            <MyInput type='password' id='password' label='Mon mdp :'/>
            <MySubmit label='Valider'/>
        </form>
    );
}

export default MyForm;