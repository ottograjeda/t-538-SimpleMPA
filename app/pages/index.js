// Home (aka index.html)
import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'components/Header'; 
import Footer from 'components/Footer'; 

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
