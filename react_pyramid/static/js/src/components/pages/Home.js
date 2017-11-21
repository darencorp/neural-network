import React from "react"

import Button from "../controlls/Button"

const logo = "static/img/neural_network.png";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main className="uk-flex uk-flex-center">
                <div className="uk-width-3-4">
                    <div className="uk-flex uk-flex-center">
                        <img src={logo}></img>
                        <div className="uk-position-center uk-margin-bottom uk-text-center">
                            <h1>Neural network</h1>
                            <Button buttonStyle="primary" href="#" text="Get It"/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}