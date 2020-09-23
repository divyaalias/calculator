import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: "0",
            equation: ""
        }
    }
    onClick = button => {
        if (button === "=") {
            this.calculate()
        }
        else if (button === "clear") {
            this.reset()
        }
        else {
            this.setState({
                result: this.state.equation + button,
                equation: this.state.equation + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('//')) {
            checkResult = "error"
        }
        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "0",
            equation: ""
        })
    };

    render() {
        return (
            <div className="calculator-body">
                <ResultComponent result={this.state.result} />
                <KeyPadComponent onClick={this.onClick} />
            </div>
        );
    }
}


export default App;
