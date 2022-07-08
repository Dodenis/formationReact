import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
hydrate(
    <App data='client' />, 
    document.getElementById('app')
);