export default function reservationsReducer(state={}, action){
  switch(action.type) {
    case "CREATE_RESERVATION":
      return action.payload.data
    case "EDIT_RESERVATION":
      return action.payload.data
    case "REQUEST_RESERVATION":
      return action.payload.data
    case "DELETE_RESERVATION":
      return {}
    default:
      return state
  }
}
