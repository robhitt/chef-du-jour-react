export default function diningExperiencesReducer(state = [], action){
  switch(action.type){
    case "CREATE_DINING_EXPERIENCE":
      return action.payload
    default:
    return state
  }
}




export default function usersReducer(state=[], action){
  switch(action.type) {
    case "CREATE_USER":
      return action.payload.data.jwt
    default:
      return state
  }
}
