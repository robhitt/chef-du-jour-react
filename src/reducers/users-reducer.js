export default function usersReducer(state={}, action){
  switch(action.type) {
    case "CREATE_USER":
      return action.payload.data
    case "LOGIN_USER":
      return action.payload.data
    case "SHOW_USER_INFO":
      return action.payload.data // data is passed back by axios
    case "DELETED_USER":
      return action.payload.data
    case "LOGOUT_USER":
      return {}
    default:
      return state
  }
}
