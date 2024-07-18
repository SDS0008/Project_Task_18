import { Component } from "react";

import './index.css'

class RandomNumberGen extends Component {
    state = { randomNum: 0 }


    generateRandomNum = () => {
        const randomNumber = Math.ceil(Math.random() * 1000);

        this.setState({ randomNum: randomNumber })
    }

    render() {

        const { randomNum } = this.state

        return (
            <div className="random-num-bg">
                <div className="random-num-card">
                    <h1 className="random-num-heading">Random Number</h1>

                    <p className="random-num-note">
                        Generate a random number in the range of 0 to 1000.
                    </p>
                    <button
                        className="random-num-btn"
                        onClick={ this.generateRandomNum }
                        type="button">
                        Generate Number
                    </button>
                    <p className="random-num">{ randomNum }</p>
                </div>
            </div>
        )
    }
}

export default RandomNumberGen;