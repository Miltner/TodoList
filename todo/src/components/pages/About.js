import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1 style={styleAbout}>About</h1>
            <h1 style={styleText}>This is the TodoList app v1.0.0</h1>
        </React.Fragment>

    )
}

const styleAbout = {
    textAlign: 'Center'
}

const styleText = {
    fontSize: '20px'
}

export default About;