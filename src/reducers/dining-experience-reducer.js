export default function diningExperiencesReducer(state = [], action){
  switch(action.type){
    case "CREATE_DINING_EXPERIENCE":
      return [...state, action.payload]
    case "FETCH_DINING_EXPERIENCES":
        return action.payload.data
    case "FETCH_DINING_EXPERIENCE_INFO":
      return action.payload.data
    default:
    return state
  }
}
