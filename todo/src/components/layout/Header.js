import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#091f36',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}

const linkStyle = {
    color: '#fff',
    //float: 'right'
}

export default Header;