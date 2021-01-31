import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Profile from './screens/Profile/Profile'
import Internship from './screens/Internship/Internship'
import Fellowship from './screens/Fellowship/Fellowship'
import Placement from './screens/Placement/Placement'
import Scholarship from './screens/Scholarship/Scholarship'
import Auth from './screens/Auth/Auth'

export default function Routes() {
 return(
  <div>
   <Router>
    <Switch>
    <Route exact path='/' component={Auth} />
     <Route exact path='/profile' component={Profile} />
     <Route exact path='/internship' component={Internship} />
     <Route exact path='/scholarship' component={Scholarship} />
     <Route exact path='/fellowship' component={Fellowship} />
     <Route exact path='/placement' component={Placement} />
    </Switch>
   </Router>
  </div>
 )
}