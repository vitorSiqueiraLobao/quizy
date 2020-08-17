import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import CreateQuizy from './pages/CreateQuizy'
import Play from './pages/Play'
import Results from './pages/Results'


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path='/create' component={CreateQuizy}/>
            <Route path='/play' component={Play}/>
            <Route path='/results' component={Results}/>
        </BrowserRouter>
    )
}
export default Routes