import React, { Component } from 'react';

class TextInput extends Component {
    state = {
        formData: this.props.location
    }

    handleChangeText = e => {
        this.props.handleUpdateText(e.target.value);
    }

    handleChangeColor = e => {
        this.props.handleUpdateColor(e.target.value);
    }

    render() {
        return (
            <div>
                <form className='input-form'>
                    <div>
                        <label htmlFor='text'>Enter text:</label>
                        <input id='text' autoComplete='off' onChange={this.handleChangeText}></input>
                    </div>
                    <div>
                        <label htmlFor='color'>Choose a color:</label>
                        <input type='color' id='color' onChange={this.handleChangeColor} />
                    </div>
                </form>
            </div >
        )
    }
}

export default TextInput;