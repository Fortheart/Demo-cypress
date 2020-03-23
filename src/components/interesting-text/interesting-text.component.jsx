import React from 'react';

import './interesting-text.styles.css';

const InterestingText = () => {
    return (
        <div className="interestingTextdiv">
            <h1 className="smartassTexth1">Smart Wikipedia text</h1>
            <p className="smartassTextp">
                React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces.
                It is maintained by Facebook and a community of individual developers and companies.
                React can be used as a base in the development of single-page or mobile applications. However,
                React is only concerned with rendering data to the DOM,
                and so creating React applications usually requires the
                use of additional libraries for state management and routing.
                Redux and React Router are respective examples of such libraries.
</p>
        </div>
    )
}

export default InterestingText;