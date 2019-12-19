import React from 'react';
import ReactDOM from 'react-dom';

import './post-1.css'; 
import Header from 'components/Header';
import Footer from 'components/Footer'; 

var blogPicture = '../images/tv-test-pattern.png'; // will appear in HTML (as is) - does not copy file (copy file via webpack plugin)

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
document.getElementById('blog-photo-1').setAttribute('src', blogPicture);
