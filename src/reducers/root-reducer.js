import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import reservationsReducer from './reservations-reducer'
import diningExperiencesReducer from './dining-experience-reducer'
import myDiningExperiencesReducer from './my-dining-experiences-reducer'
import myReservationsReducer from './my-reservations-reducer'

export default combineReducers({
  users: usersReducer,
  reservations: reservationsReducer,
  diningExperiences: diningExperiencesReducer,
  myDiningExperiences: myDiningExperiencesReducer,
  myReservations: myReservationsReducer
})
