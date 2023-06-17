import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: "Submit"}
    const style = {backgroundColor: 'red', color: 'white'};
    return(
        <div>
            <label for="name" className= 'label'> Enter e-mail</label>
            <input id='name' type='text' />
            <button style = {style}>
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


