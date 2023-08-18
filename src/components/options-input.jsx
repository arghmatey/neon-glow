import React from 'react';

const TextInput = (props) => {
    const handleChangeText = e => {
        props.handleUpdateText(e.target.value);
    }

    const handleChangeColor = e => {
        props.handleColorUpdate(e.target.value);
    }

    const handleClearInput = e => {
        props.handleUpdateText('');
        props.handleColorUpdate('');
        document.getElementById('input-form').reset();
    }

    return (
        <div className='form-wrapper'>
            <div id='input-form'>

                <span>
                <label htmlFor='text'>Enter Text:</label>
                <input id='text' autoComplete='off' onChange={handleChangeText} maxLength="15"></input>
                </span>

                <span>
                <label htmlFor='color'>Choose Color:</label>
                <input type='range' id='color' min='0' max='360' onChange={handleChangeColor}/>
                </span>

            </div>
            <div className='buttons'>
                <button onClick={handleClearInput}>Clear</button>
            </div>
        </div>
    )
}

export default TextInput;
