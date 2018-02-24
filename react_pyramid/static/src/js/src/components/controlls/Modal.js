import React from "react"

export default class Modal extends React.Component {
    constructor() {
        super();
    }

    render() {
        var positive = this.props.data.positive;
        var negative = this.props.data.negative;
        var all = positive + negative;

        return (
            <div id="modalForm" class="uk-modal-container">
                <div class="uk-modal-dialog">
                    <div class="uk-modal-header">
                        <h2 class="uk-modal-title">Results of test</h2>
                    </div>
                    <div class="uk-modal-body">

                        <div class="uk-flex uk-flex-column">
                            <div class="uk-flex uk-flex-column">
                                <div>
                                    <h4 class="uk-margin-left">Rules:</h4>
                                </div>
                                <div class="uk-height-medium uk-panel uk-panel-scrollable">
                                    {this.props.data.rules.map(function (i, index) {
                                        return <div class="uk-margin-left" key={index}>{i}</div>
                                    })}
                                </div>
                            </div>
                            <hr/>
                            <div class="uk-margin-left uk-flex uk-flex-column">
                                <div>
                                    <h4>Results of data set:</h4>
                                </div>
                                <div class="uk-margin-small-left">Count of <b>correct</b> predicted records: {positive}</div>
                                <div class="uk-margin-small-left">Count of <b>wrong</b> predicted records: {negative}</div>
                                <div>&nbsp;</div>
                                <div class="uk-margin-small-left">Classification accuracy: 𝜇 = 𝑁𝑐 / 𝑁𝑡, <b>{positive} / {all} = {Math.round(positive/all*100)/100}</b></div>
                                <div class="uk-margin-small-left">Classification error: 𝜀 = (𝑁𝑡−𝑁𝑐) / 𝑁𝑡, <b>({all} - {positive}) / {all} = {Math.round(negative/all*100)/100}</b></div>
                            </div>
                        </div>

                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">OK</button>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}