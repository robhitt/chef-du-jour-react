export default function diningExperiencesReducer(state = [], action){
  switch(action.type){
    case "CREATE_DINING_EXPERIENCE":
      return action.payload
    case "FETCH_DINING_EXPERIENCES":
        return action.payload.data
    default:
    return state
  }
}
