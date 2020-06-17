import React, { Component } from 'react';

class TextInput extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <form className='input-form'>
                    <label htmlFor='text'>Enter text:</label>
                    <input id='text' default='Neon Glow'></input>
                    <label htmlFor='favcolor'>Choose a color:</label>
                    <input type='color' id='favcolor' name='favcolor' />
                </form>
            </div >
        )
    }
}

export default TextInput;