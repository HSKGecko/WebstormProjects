import React from 'react';
import ReactDOM from 'react-dom';

//function-based component
const App = function() {
    return(
        <div>Hi there!</div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


