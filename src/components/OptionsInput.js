import React, { Component } from 'react';

class TextInput extends Component {
    state = {
        formData: this.props.location
    }

    handleChangeText = e => {
        console.log(e.target.value);
        this.props.handleUpdateText(e.target.value);
    }

    handleChangeColor = e => {
        console.log(e.target.value);
        this.props.handleUpdateColor(e.target.value);
    }

    render() {
        return (
            <div>
                <form className='input-form'>
                    <label htmlFor='text'>Enter text:</label>
                    <input id='text' autoComplete='off' onChange={this.handleChangeText}></input>
                    <label htmlFor='color'>Choose a color:</label>
                    <input type='color' id='color' onChange={this.handleChangeColor} />
                </form>
            </div >
        )
    }
}

export default TextInput;