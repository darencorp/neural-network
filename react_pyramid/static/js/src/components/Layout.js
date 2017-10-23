import React from "react"
import {NavLink, Route} from "react-router-dom"

import Header from "./Header"
import Main from "./Main";

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}
