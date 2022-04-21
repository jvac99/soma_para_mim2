import React from 'react';
import './Button.css';

const Button = (props) => {

    const { tipo, valor, click, enviar } = props;

    return (
        <button className='button' type={tipo} onClick={click} onSubmit={enviar}>
            {valor}
        </button>
    );
}

export default Button;