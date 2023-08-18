import React from 'react';

const OptionsInput = ({
    onColorChange
}) => {

    const handleColorChange = e => {
        onColorChange && onColorChange(e.target.value);
    }

    return (
        <div className='options'>
            <label htmlFor='color'>
                Color:
            </label>
            <input
                type='range'
                id='color'
                min='0'
                max='360'
                onChange={handleColorChange}
            />
        </div>
    )
}

export default OptionsInput;
