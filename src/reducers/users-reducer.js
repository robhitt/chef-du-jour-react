export default function usersReducer(state=[], action){
  debugger
  switch(action.type) {
    case "CREATE_USER":
      return action.payload.data.id
    default:
      return state
  }
}
