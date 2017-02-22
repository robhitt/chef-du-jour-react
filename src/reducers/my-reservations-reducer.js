export default function myReservationsReducer(state=[], action){
  switch(action.type) {
    case "FETCH_MY_RESERVATIONS":
        return action.payload.data
    default:
      return state
  }
}
