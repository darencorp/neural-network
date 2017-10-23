import React from "react"
import ReactDOM from "react-dom"
import {HashRouter, Switch, Route} from 'react-router-dom'

import Layout from "./components/Layout"

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <Layout/>
    </HashRouter>, app)