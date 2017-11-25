import React from "react"

import Header from "./layout/Header"
import Main from "./layout/Main";

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
