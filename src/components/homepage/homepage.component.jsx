import React from 'react';

import logo from '../../logo.svg';
import './homepage.styles.css';
import HomepageImage from '../../img/wallpaper.png';

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

                    {this.state.value ? <img src={HomepageImage} className="homepageImage" alt="logo" /> : null}
                    <div>
                        {this.state.value === true ?
                            <button onClick={switchState} className="homepageButton">HIDE IMAGE</button> :
                            <button onClick={switchState} className="hiddenHomepageButton">SHOW IMAGE</button>
                        }

                        {this.state.coolText === true ?
                            <button onClick={switchInterestingText} className="homepageButton">HIDE TEXT</button> :
                            <button onClick={switchInterestingText} className="homepageButton">SHOW TEXT</button>
                        }

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