import React, { Component } from 'react';

class TextInput extends Component {
    state = {
        formData: this.props.location
    }

    handleChangeText = e => {
        this.props.handleUpdateText(e.target.value);
    }

    handleChangeColor = e => {
        this.props.handleColorUpdate(e.target.value);
    }

    handleClearInput = e => {
        this.props.handleUpdateText('');
        this.props.handleColorUpdate('');
        document.getElementById('input-form').reset();
        document.getElementById('colorOutput').innerHTML = '';
        document.getElementById('shadowOutput').innerHTML = '';
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form id='input-form'>
                    <input id='text' autoComplete='off' onChange={this.handleChangeText} placeholder="Enter text here!"></input><br />
                    <div>Color Slider</div>
                    <input type='range' id='color' min='0' max='360' onChange={this.handleChangeColor} /><br />
                    <label htmlFor='color'>Glow Intensity</label><br />
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