import React from "react"

export default class Explain extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                <div className="uk-width-2-3">
                    <div className="uk-margin-top">
                        <blockquote>
                            <p className="uk-margin-small-bottom"><strong>Artificial neural networks (ANNs)</strong> <i>are
                                computing systems inspired by</i>
                                the
                                biological neural networks that constitute animal brains. Such systems learn
                                (progressively
                                improve
                                performance) to do tasks by considering examples, generally without task-specific
                                programming. They have found most use in applications difficult to
                                express in a
                                traditional computer algorithm using rule-based programming.</p>
                            <footer class="uk-margin-right">Information form <cite><a
                                href="https://en.wikipedia.org/wiki/Artificial_neural_network">Wiki</a></cite></footer>
                        </blockquote>
                    </div>
                    <hr/>
                    <div>
                        <div className="uk-text-large uk-margin-top">
                            In this project we were training the neuron to solve the problem with Questions. So we have
                            made
                            a training set and have put it into database.
                        </div>

                        <div className="uk-margin-top uk-text-large">
                            <h3>Training process</h3>

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

                        <hr/>

                        <div className="uk-margin-top uk-text-large">
                            <h3>Prediction</h3>
                            After above steps we can predict some case with our data. To make this we call function predict
                        in out neural network.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}