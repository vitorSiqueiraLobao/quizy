import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Landing(){
    return(
        <div id="main-container">
            <div className="logo">
                <p>Quizy</p>
            </div>
            <div className="buttons">
                <button className="primary-button"><Link to="/play">Play</Link></button>
                <button className="secondary-button"><Link to="/create"> Create new Quizy</Link></button>
            </div>
        </div>
    )
}

export default Landing