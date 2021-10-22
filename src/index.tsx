import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Styles/index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "./Provider/ThemeProvider";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
