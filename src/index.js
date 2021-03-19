// index component to inject our app onto our index.html, uses react-router-dom to have a "MPA"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './styles/index.css';
import App from './App';


ReactDOM.render(
  // basename is for where I have it stored on my personal website
  <BrowserRouter basename="/projects/marquee">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
