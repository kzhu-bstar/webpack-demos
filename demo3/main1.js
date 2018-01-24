// main1.js
import React from 'react';
import {render} from 'react-dom';
import {name,age}  from './main2';

render(<h1>Hello World -- {name}</h1>, document.getElementById('wrapper'));