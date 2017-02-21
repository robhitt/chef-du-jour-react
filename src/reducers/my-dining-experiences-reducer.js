export default function myDiningExperiencesReducer(state = [], action){
  switch(action.type){
    case "FETCH_MY_DINING_EXPERIENCES":
      return action.payload.data
    case "EDIT_MY_DINING_EXPERIENCE":
      return state.map( diningExperience => {
        if ( diningExperience.id === action.payload.id ){
          return action.payload
        } else {
          return diningExperience
        }
      })
    default:
      return state
  }
}
