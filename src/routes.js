import React from 'react'
import { Route, IndexRoute } from 'react-router' //import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserShow from './components/UserShow'
import ReservationFinder from './components/ReservationFinder'
import ReservationShow from './components/ReservationShow'
import CreateDiningExperience from "./components/CreateDiningExperience"
import DiningExperienceShow from "./components/DiningExperienceShow"
import MyDiningExperiences from "./components/MyDiningExperienceIndex"
import Home from "./components/Home"

import UserEdit from "./components/UserEdit"
import ManageMyDiningExperience from "./components/ManageMyDiningExperience"

const requireLogin = (nextState, replace) => {
    if (!sessionStorage.jwt) {
        replace({ pathname: '/' })
    }
}


export default (
  <Route path="/" component={ App }>
    <IndexRoute component ={ Home } />
    <Route path="signup" component={ UserSignUp } />
    <Route path="signin" component={ UserSignIn } />
    <Route path="reservation-finder" component={ ReservationFinder } onEnter ={ requireLogin } />
    <Route path="my_reservations" component={ ReservationShow } onEnter ={ requireLogin } />
    <Route path="user_edit" component={ UserEdit } onEnter ={ requireLogin} />
    <Route path="user">
      <Route path="create-dining-experience" component={CreateDiningExperience} onEnter ={ requireLogin } />
      <Route path=":id" component={ UserShow } onEnter ={ requireLogin}/>
      <Route path=":id/my_dining_experiences" component={MyDiningExperiences} onEnter ={ requireLogin }/>
    </Route>
    <Route path="manage">
      <Route path=":id" component={ManageMyDiningExperience} onEnter ={ requireLogin }/>
    </Route>
    <Route path="dining_experiences">
      <Route path=":id" component={DiningExperienceShow} onEnter ={ requireLogin }/>
    </Route>
  </Route>
)

// <Route path=":id/my_dining_experiences/:dining_experience_id" component={MyDiningExperience}/>

    // add Link component to all links that use react router { Link } from 'react-router'
    // <a href="#" become <Link to={path} />
