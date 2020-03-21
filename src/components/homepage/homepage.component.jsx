import React from 'react';

import logo from '../../logo.svg';
import './homepage.styles.css';

import InterestingText from '../interesting-text/interesting-text.component';

class Homepage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: true,
            coolText: false
        }
    }

    render() {

        const switchState = () => {
            this.setState({ value: !this.state.value });
        }
        const switchInterestingText = () => {
            this.setState({ coolText: !this.state.coolText })
        }


        return (
            <div className="App">
                <body>

                    {this.state.value ? <img src={logo} className="App-logo" alt="logo" /> : null}
                    <div>
                        <button onClick={switchState}>
                            {this.state.value === true ? "Hide Image" : "Show Image"}
                        </button>
                        <button onClick={switchInterestingText}>
                            {this.state.coolText === true ? "Hide Smartass text" : "Show Smartass text"}
                        </button>
                        {this.state.coolText ?
                            <InterestingText /> : null
                        }
                    </div>

                </body>


            </div>
        )
    }
}

export default Homepage;