import React from 'react'
import './styles.css'

function Play(){
    return(
        <div id="main-container">
            <div className="header">
                <div className="main-header">
                    <p>Header</p>
                </div>
                <div className="progress-header">
                    0/total
                </div>
            </div>
            <div className="alternatives">
                <div className="button-block">
                    <button>Alternative 1</button>
                </div>
                <div className="button-block">
                    <button>Alternative 2</button>
                </div>
                <div className="button-block">
                    <button>Alternative 3</button>
                </div>
                <div className="button-block">
                    <button>Alternative 4</button>
                </div>
            </div>
        </div>
    )
}

export default Play