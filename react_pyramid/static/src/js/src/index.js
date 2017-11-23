import React from "react"
import ReactDOM from "react-dom"
import {HashRouter} from 'react-router-dom'

import Layout from "./components/Layout"

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <Layout/>
    </HashRouter>, app)