export default function reservationsReducer(state=[], action){
  switch(action.type) {
    case "CREATE_RESERVATION":
      return action.payload.data
    case "EDIT_RESERVATION":
      return action.payload.data
    case "REQUEST_RESERVATION":
      return action.payload.data
    case "DELETE_RESERVATION":
      return {}
    case "FETCH_AVAILABLE_LISTINGS":
      return action.payload.data
    default:
      return state
  }
}
