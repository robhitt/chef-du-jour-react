import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import reservationsReducer from './reservations-reducer'
import diningExperienceReducer from './dining-experience-reducer'

export default combineReducers({
  users: usersReducer,
  reservations: reservationsReducer,
  diningExperiences: diningExperienceReducer
})
