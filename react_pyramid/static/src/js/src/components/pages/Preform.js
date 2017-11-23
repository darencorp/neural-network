import React from "react"

import Question from "../controlls/Question"
import Button from "../controlls/Button";

export default class Preform extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            a: "Some text",
            answers: []
        }
    }

    makeAnswer(question, answer) {
        this.state.answers[question] = answer
    }

    printAnswer() {
        return fetch('/some', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            // ,
            // body: JSON.stringify({
            //     firstParam: 'yourValue',
            //     secondParam: 'yourOtherValue',
            // })
        })
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                <Question text="1. I prefer to work by myself rather than in a team." id="question1"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="2. I always make a detailed plan before I begin any job." id="question2"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="3. Trusting others on the job can be dangerous." id="question3"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="4. I always stay relaxed in difficult situations at work." id="question4"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="5. Everybody at work sees me as self-confident." id="question5"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="6. I never break any rules at my job." id="question6"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="7. I work harder than anybody else doing my job." id="question7"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <div onClick={this.printAnswer.bind(this)}>
                    <Button buttonStyle="primary"
                            additionalClass="uk-margin-top uk-margin-large-bottom" text="Check"/>
                </div>
            </div>
        )
    }
}