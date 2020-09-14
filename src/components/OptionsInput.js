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

    handleClearInput = e => {
        this.props.handleUpdateText('');
        this.props.handleUpdateColor('');
        document.getElementById('input-form').reset();
        document.getElementById('colorOutput').innerHTML = '';
        document.getElementById('shadowOutput').innerHTML = '';
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form id='input-form'>
                    <label htmlFor='text'>Enter text:</label><br />
                    <input id='text' autoComplete='off' onChange={this.handleChangeText}></input><br />
                    <label htmlFor='color'>Choose a color:</label><br />
                    <input type='color' id='color' onChange={this.handleChangeColor} /><br />
                    <label htmlFor='color'>Glow Intensity:</label><br />
                    <input type='range' id='glow' disabled /><br />
                </form>
                <div className='buttons'>
                    <button onClick={this.handleClearInput}>Clear</button>
                    <button disabled>Copy</button>
                </div>
            </div>
        )
    }
}

export default TextInput;