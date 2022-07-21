import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"

const app=ReactDOM.createRoot(document.getElementById('root'))
app.render(<Router><App /></Router>)
