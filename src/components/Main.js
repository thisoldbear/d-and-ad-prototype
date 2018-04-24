import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import CaseStudy from './CaseStudy';
import Profile from './Profile';
import Nomination from './Nomination';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/case-study' component={CaseStudy}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/nomination' component={Nomination}/>
    </Switch>
  </main>
)

export default Main
