import React from "react";
import Home from './homePage/Home';
import Form from './homePage/Form';
import './homePage/styles/main.scss';
import './homePage/styles/responsive.scss';
import './homePage/styles/form.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return ( <
        BrowserRouter >
        <
        div className = "App" >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        /> <
        Route path = "/form"
        element = { < Form / > }
        /> </Routes > < /
        div > < /
        BrowserRouter >
    );
}

export default App;