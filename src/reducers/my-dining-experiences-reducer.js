export default function myDiningExperiencesReducer(state = [], action){
  switch(action.type){
    case "FETCH_MY_DINING_EXPERIENCES":
      return action.payload.data
    default:
    return state
  }
}
