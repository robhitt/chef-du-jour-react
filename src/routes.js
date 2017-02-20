import React from 'react'
import { Route } from 'react-router' //import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserShow from './components/UserShow'
import Reservation from './components/Reservation'
import CreateDiningExperience from "./components/CreateDiningExperience"
import DiningExperienceShow from "./components/DiningExperienceShow"
import MyDiningExperiences from "./components/MyDiningExperienceIndex"
import calendar from "./components/calendar"

import UserEdit from "./components/UserEdit"
import ManageMyDiningExperience from "./components/ManageMyDiningExperience"
export default (
  <Route path="/" component={ App }>
    <Route path="calendar" component={calendar} />
    <Route path="signup" component={ UserSignUp } />
    <Route path="signin" component={ UserSignIn } />
    <Route path="reservations" component={ Reservation } />
    <Route path="user_edit" component={ UserEdit } />
    <Route path="user">
      <Route path="create-dining-experience" component={CreateDiningExperience} />
      <Route path=":id" component={ UserShow }/>
      <Route path=":id/my_dining_experiences" component={MyDiningExperiences}/>
    </Route>
    <Route path="manage">
      <Route path=":id" component={ManageMyDiningExperience}/>
    </Route>
    <Route path="dining_experiences">
      <Route path=":id" component={DiningExperienceShow}/>
    </Route>


  </Route>
)

// <Route path=":id/my_dining_experiences/:dining_experience_id" component={MyDiningExperience}/>

    // add Link component to all links that use react router { Link } from 'react-router'
    // <a href="#" become <Link to={path} />
