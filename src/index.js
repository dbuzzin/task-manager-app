// React Imports

import React from 'react';
import ReactDOM from 'react-dom';

// Redux Imports

import { Provider } from "react-redux";

import configureStore from "./store";

// Component Imports

import MainWindowInner from "./components/MainWindowInner";

// Style Imports

import './css/index.css';

// Render

ReactDOM.render(

    <Provider store={configureStore()}>
        <MainWindowInner />
    </Provider>
    
    , document.getElementById("react-mainWindowInner"));
