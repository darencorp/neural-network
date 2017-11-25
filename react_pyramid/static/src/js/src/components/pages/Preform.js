import React from "react"
import axios from "axios"

import Question from "../controlls/Question"
import Button from "../controlls/Button";
import Alert from "../controlls/Alert";
import AlertDanger from "../controlls/AlertDanger";

export default class Preform extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            answers: [null, null, null, null, null, null, null],
            showAlert: false,
            showDangerAlert: false,
            result: ''
        }
    }

    makeAnswer(question, answer) {
        this.state.answers[question] = answer
    }

    preform() {
        this.setState({showAlert: false, showDangerAlert: false});

        var checked = this.state.answers.filter(answer => answer == null);

        if (checked.length == 0) {
            axios.post('/preform', {"answers": this.state.answers}).then(res => {
                var message = "Result: " + res.data;
                this.setState({result: message, showAlert: true})
            });
        } else {
            this.setState({showDangerAlert: true});
        }
    }

    closeAlert() {
        this.setState({showAlert: false})
    }

    closeDangerAlert() {
        this.setState({showDangerAlert: false})
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">

                <div onClick={this.closeAlert.bind(this)}>
                    {this.state.showAlert && <Alert text={this.state.result}/>}
                </div>

                <div onClick={this.closeDangerAlert.bind(this)}>
                    {this.state.showDangerAlert && <AlertDanger text="Some answers are not checked!"/>}
                </div>

                <Question text="1. I prefer to work by myself rather than in a team." id="0"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="2. I always make a detailed plan before I begin any job." id="1"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="3. Trusting others on the job can be dangerous." id="2"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="4. I always stay relaxed in difficult situations at work." id="3"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="5. Everybody at work sees me as self-confident." id="4"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="6. I never break any rules at my job." id="5"
                          changeAnswer={this.makeAnswer.bind(this)}/>
                <Question text="7. I work harder than anybody else doing my job." id="6"
                          changeAnswer={this.makeAnswer.bind(this)}/>

                <div onClick={this.preform.bind(this)}>
                    <Button buttonStyle="primary"
                            additionalClass="uk-margin-top uk-margin-large-bottom" text="Check"/>
                </div>
            </div>
        )
    }
}