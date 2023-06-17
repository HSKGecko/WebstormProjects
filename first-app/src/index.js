import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Hi there'
}

//function-based component
const App = () => {
    const buttonText = "Click me!"
    return(
        <div>
            <label for="name" className= 'label'> Enter e-mail</label>
            <input id='name' type='text' />
            <button style={{backgroundColor: 'red', color: 'white'}}>
                { getButtonText() }
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


