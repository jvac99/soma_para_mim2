import React from 'react';
import './InputNumber.css';

const InputNumber = (props) => {

    const { texto, onChange } = props;
    /*
    const handleChangeValue = (event) => {
        props?.callback(event.target.value);
    }*/

    return (
        <input type="number" className="inputNumber" placeholder={texto} required onChange={onChange} />
    );

}

export default InputNumber;