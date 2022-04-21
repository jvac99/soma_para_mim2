import React from 'react';
import './Header.css';

const Header = (props) => {

    const { titulo, subtitulo } = props;

    return (
        <header className="header">
            <h1 className="titulo">{titulo}</h1>
            <h3>{subtitulo}</h3>
        </header>
    );
}

export default Header;