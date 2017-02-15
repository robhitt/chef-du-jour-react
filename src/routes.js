import React from 'react'
import { Route } from 'react-router' //import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserShow from './components/UserShow'

export default (
  <Route path="/" component={ App }>

    <Route path="signup" component={ UserSignUp } />

    <Route path="signin" component={ UserSignIn } />


    <Route path="user">

      <Route path=":id" component={UserShow} />
    </Route>

  </Route>
)
