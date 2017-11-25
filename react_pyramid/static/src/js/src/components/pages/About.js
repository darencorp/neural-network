import React from "react"

export default class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top">
                <div className="uk-text-large">
                    Created by Nazariy Mandebura
                </div>
                <div className="uk-text-muted">
                    darencorp: <a className="uk-link">https://github.com/darencorp</a>
                </div>
                <div className="uk-position-bottom-center uk-margin-large-bottom">
                    <div className="uk-flex uk-flex-column uk-flex-middle">
                        <div>
                            This project for lesson Team Project
                        </div>
                        <div className="uk-text-small uk-text-muted">
                            Rzeszow, 2017
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}