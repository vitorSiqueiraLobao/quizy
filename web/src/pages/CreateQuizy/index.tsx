import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom'


function CreateQuizy(){
    return(
        <div className="main-container">
            <div className="hero">
            <Link to="/">
                <p>
                    
                    Create new Quizy
                    
                </p>
            </Link>
            </div>
            <form>
                <div className="input-block">
                    <input type="text" name="header" placeholder="header"/>
                </div>
                <div className="input-block">
                    <input type="text" name="header" placeholder="Alternative 1"/>
                    <input type="radio" name="correct"/>
                </div>
                <div className="input-block">
                    <input type="text" name="header" placeholder="Alternative 2"/>
                    <input type="radio" name="correct"/>
                </div>
                <div className="input-block">
                    <input type="text" name="header" placeholder="Alternative 3"/>
                    <input type="radio" name="correct"/>
                </div>
                <div className="input-block">
                    <input type="text" name="header" placeholder="Alternative 4"/>
                    <input type="radio" name="correct"/>
                </div>
                <div className="input-block">
                    <label htmlFor="types">Type</label>
                    <select name="types">
                        <option value="math"> Math</option>
                        <option value="science"> Science</option>
                        <option value="history"> History</option>
                        <option value="other"> Other</option>
                    </select>    
                </div>
                <div className="input-block">
                    <label htmlFor="difficult">Difficult</label>
                    <select name="difficult">
                        <option value="easy"> Easy</option>
                        <option value="normal"> Normal</option>
                        <option value="hard"> Hard</option>
                        <option value="extreme"> Extreme</option>
                    </select>    
                </div>
                <div className="input-block">
                    <input type="text" name="creator" placeholder="Creator's name"/>
                </div>
                
            </form>
        </div>
    )
}

export default CreateQuizy