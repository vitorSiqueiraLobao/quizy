import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import CreateQuizy from './pages/CreateQuizy'


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path='/create' component={CreateQuizy}/> 
        </BrowserRouter>
    )
}
export default Routes