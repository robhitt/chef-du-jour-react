export default function myDiningExperiencesReducer(state = [], action){
  switch(action.type){
    case "FETCH_MY_DINING_EXPERIENCES":
      return action.payload.data
    case "EDIT_MY_DINING_EXPERIENCE":
      return []
    default:
    return state
  }
}
