import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'

import './global.css'
const container = document.getElementById('app');

ReactDOM.render(< Badge name="José" lastname="Cuevas" jobTitle="Full Stack Developer" twitter="josecrz13" />, container);
