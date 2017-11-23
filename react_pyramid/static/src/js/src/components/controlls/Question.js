import React from "react"

export default class Question extends React.Component {
    constructor() {
        super();
    }

    answer(answer) {
        this.props.changeAnswer(parseInt(this.props.id), answer);
    }

    render() {
        return (
            <div className="uk-flex-center uk-width-3-4 uk-margin-top uk-margin-bottom uk-grid">
                <div className="uk-width-2-3 uk-margin-bottom uk-text-large">{this.props.text}</div>
                <div className="radio uk-width-2-3 uk-flex uk-flex-row uk-flex-around uk-flex-center">

                    <div className="uk-flex uk-flex-column uk-flex-middle" onClick={(answer) => this.answer("false")}>
                        <input type="radio" name={this.props.id} id={this.props.id + "1"}></input>
                        <label for={this.props.id + "1"} className="uk-inline">
                            <div className="uk-position-center"></div>
                        </label>
                        <div>False</div>
                    </div>

                    <div className="uk-flex uk-flex-column uk-flex-middle" onClick={(answer) => this.answer("somewhat")}>
                        <input type="radio" name={this.props.id} id={this.props.id + "2"}></input>
                        <label for={this.props.id + "2"} className="uk-inline">
                            <div className="uk-position-center"></div>
                        </label>
                        <div>Somewhat true</div>
                    </div>

                    <div className="uk-flex uk-flex-column uk-flex-middle" onClick={(answer) => this.answer("true")}>
                        <input type="radio" name={this.props.id} id={this.props.id + "3"}></input>
                        <label for={this.props.id + "3"} className="uk-inline">
                            <div className="uk-position-center"></div>
                        </label>
                        <div>True</div>
                    </div>
                </div>
            </div>
        )
    }
}