export default function reservationsReducer(state=[], action){
  switch(action.type) {
    case "CREATE_RESERVATION":
      return action.payload.data
    case "FETCH_MY_RESERVATIONS":
        return action.payload.data
    case "EDIT_RESERVATION":
      return action.payload.data
    case "REQUEST_RESERVATION":
    const reservedDiningExperienceId = action.payload.data.dining_experience_id
    var reservedExperienceIndex = state.findIndex(e => e.id==action.payload.data.dining_experience_id)
    var newState = [...state.slice(0, reservedExperienceIndex), ...state.slice(reservedExperienceIndex+1)]
      return newState
    case "DELETE_RESERVATION":
      return {}
    case "FETCH_AVAILABLE_LISTINGS":
      return action.payload.data
    default:
      return state
  }
}
