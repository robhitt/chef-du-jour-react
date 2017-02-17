export default function myDiningExperiencesReducer(state = [], action){
  switch(action.type){
    case "FETCH_MY_DINING_EXPERIENCES":
    console.log(action.payload)
    console.log(state)
      return  action.payload.data
    default:
    return state
  }
}
