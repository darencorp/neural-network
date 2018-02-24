import React from "react"
import axios from "axios"

import Button from "../controlls/Button"
import Modal from '../controlls/Modal'

export default class Explain extends React.Component {

    constructor(state) {
        super(state);

        this.state = {
            showSpoiler: false,
            dataSet: [],
            show: false,
            data: {}
        };

        axios.post('/get_test_set', {}).then(function (ret) {
            this.setState({dataSet: ret.data})
        }.bind(this));
    }

    test() {
        this.setState({show: true})
        axios.post('/test', {}).then(ret => {
            this.setState({data: ret.data})
            UIkit.modal("#modalForm").show()
        });
    }

    show() {
        UIkit.modal("#modalForm").show()
    }

    animateIn(modal, dialog) {
        this.setState({show: true});
        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
    }

    animateOut(modal, dialog) {
        this.setState({show: false});
        velocity(modal, {opacity: 0}, {display: 'none'}, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, {display: 'none'}, 200);
    }

    spoiler() {
        this.setState({showSpoiler: !this.state.showSpoiler});
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                {this.state.show && <Modal data={this.state.data}/>}

                <div className="uk-width-2-3">
                    <div className="uk-margin-top">
                        <blockquote>
                            <p className="uk-margin-small-bottom">
                                The main objective of this chapter is to show a strategy of rule induction based on
                                feature selection, exemplified by the LEM2 algorithm. The LEM2 algorithm uses all
                                possible attribute-value pairs as the search space. It is shown that LEM2 algorithm induces
                                small rule sets with the small total number of conditions as well.</p>
                            <footer class="uk-margin-right">Wiki</footer>
                        </blockquote>
                    </div>
                    <hr/>
                    <div>
                        <div className="uk-margin-top">
                            In this project we were training the neuron to solve the problem with Questions. So we have
                            made
                            a training set and have put it into database.
                        </div>

                        <div className="uk-margin-top">
                            <h4>- Training process</h4>

                            <div>
                                <ol className="uk-list uk-list-bullet">
                                    <li>Take the inputs from a training set example and pass it through our algorithm
                                        LEM2 to get
                                        classification rules.
                                    </li>
                                    <li>Take the inputs from a training set example, adjust them by the weights, and
                                        pass them
                                        through
                                        a special formula to calculate the neuron’s output.
                                    </li>
                                </ol>


                            </div>
                        </div>


                        <div className="uk-margin-top">
                            <h4>- Prediction</h4>
                            After above steps we can predict some case with our data. To make this we call function
                            predict
                            in out neural network.
                        </div>


                        <div className="uk-margin-top">
                            <h4>- Testing</h4>
                            Preforming testing required data set. In our case we have one into test_set table.

                            <div class="uk-flex uk-flex-center">
                                {!this.state.showSpoiler && <div onClick={this.spoiler.bind(this)} class="uk-flex">
                                    <Button buttonStyle="primary"
                                            additionalClass="uk-margin-top uk-margin-bottom uk-button-small"
                                            text="Show data set"/>
                                </div>}

                                {this.state.showSpoiler && <div onClick={this.spoiler.bind(this)} class="uk-flex">
                                    <Button buttonStyle="primary"
                                            additionalClass="uk-margin-top uk-margin-bottom uk-button-small"
                                            text="Hide data set"/>
                                </div>}
                            </div>

                            {this.state.showSpoiler && <div class="uk-overflow-auto uk-height-medium">
                                <table class="uk-table uk-table-striped uk-table-condensed uk-text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Question 1</th>
                                        <th>Question 2</th>
                                        <th>Question 3</th>
                                        <th>Question 4</th>
                                        <th>Question 5</th>
                                        <th>Question 6</th>
                                        <th>Question 7</th>
                                        <th>Result</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.dataSet.map((item, index) => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.question0}</td>
                                            <td>{item.question1}</td>
                                            <td>{item.question2}</td>
                                            <td>{item.question3}</td>
                                            <td>{item.question4}</td>
                                            <td>{item.question5}</td>
                                            <td>{item.question6}</td>
                                            <td>{item.result + ""}</td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                            </div>}

                            <div class="uk-margin-medium-top">
                                Preforming that data set on our algorithm will give us the next result: Positive = 23,
                                Negative = 7.
                                However our train DB contains 86 rows for AI, it still lack for the best results of
                                test.
                            </div>

                            <div class="uk-flex uk-flex-column uk-flex-middle">

                                <div class="uk-margin-medium-top">
                                    You can prefom it by pressing on "Test" key.
                                </div>
                                <div onClick={this.test.bind(this)}>
                                    <Button buttonStyle="primary"
                                            additionalClass="uk-margin-top uk-margin-large-bottom" text="Test"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}