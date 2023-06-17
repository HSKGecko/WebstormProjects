import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: "Submit"}
    return(
        <div>
            <label htmlFor="name" className= 'label'> Enter e-mail</label>
            <input id='name' type='text' />
            <button style = {{backgroundColor: 'red', color: 'white'}}>
                { buttonText.text }
            </button>
        </div>
    )
}
//We can't show a javascript object as an attribute on an element as above.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


