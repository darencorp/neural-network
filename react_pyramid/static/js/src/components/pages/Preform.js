import React from "react"

import Question from "../controlls/Question"
import Button from "../controlls/Button";

export default class Preform extends React.Component {
    constructor() {
        super();
        this.questions = [
            <Question text="1. I prefer to work by myself rather than in a team." id="question1" key="question1"/>,
            <Question text="2. I always make a detailed plan before I begin any job." id="question2" key="question2"/>,
            <Question text="3. Trusting others on the job can be dangerous." id="question3" key="question3"/>,
            <Question text="4. I always stay relaxed in difficult situations at work." id="question4" key="question4"/>,
            <Question text="5. Everybody at work sees me as self-confident." id="question5" key="question5"/>,
            <Question text="6. I never break any rules at my job." id="question6" key="question6"/>,
            <Question text="7. I work harder than anybody else doing my job." id="question7" key="question7"/>
        ]
    }

    click() {
        for(var i in this.questions) {
            this.questions[1]
        }
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                {this.questions}
                <Button onClick={this.click} buttonStyle="primary" additionalClass="uk-margin-top uk-margin-large-bottom" text="Check"/>
            </div>
        )
    }
}