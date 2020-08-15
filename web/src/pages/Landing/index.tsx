import React from 'react'
import './style.css'

function Landing(){
    return(
        <div id="main-container">
            <div className="logo">
                <p>Quizy</p>
            </div>
            <div className="buttons">
                <button className="primary-button">Play</button>
                <button className="secondary-button">Create new Quizy</button>
            </div>
        </div>
    )
}

export default Landing