import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'https://quiet-depths-25869.herokuapp.com/api/v1'
// axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const loginUser = (loginParams) => {
    const user = axios.post('/signin', loginParams).then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        browserHistory.push(`/user/${response.data.user.id}`) // THIS IS A REDIRECT IN REACT
        return response
    }).catch( (error) => error )
    return {type: 'LOGIN_USER', payload: user}
}

export const logoutUser = () => {
    sessionStorage.clear()
    browserHistory.push(`/signin`) // THIS IS A REDIRECT IN REACT
    return {type: 'LOGOUT_USER'}
}

export const createUser = (signUpParams) => {
    const user = axios.post('/signup', signUpParams).then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        browserHistory.push(`/user/${response.data.user.id}`)
        return response
    }).catch( (error) => error )
    return {type: 'CREATE_USER', payload: user}
}

export const showUser = ( userId ) => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const user = axios.get(`/users/${userId}`).then( (response) => {
    return response
  })
  return {
    type: 'SHOW_USER_INFO',
    payload: user
  }
}

export const editUser = ( editParams ) => {

 axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt') // do we need this here since it's in line 5?
 const user = axios.put(`/users/${editParams.id}`, editParams).then( (response) => {
    browserHistory.push(`/user/${response.data.id}`)
    return response
  })
  return {
    type: 'SHOW_USER_INFO',
    payload: user
  }
}

export const deleteUser = ( userId ) => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const user = axios.delete(`/users/${userId}`).then( (response) => {
    sessionStorage.clear()
    browserHistory.push('/signup')
    return response
  })
  return {
    type: 'DELETED_USER',
    payload: user
  }
}

export const createDiningExperience = (diningExperienceParams) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const diningExperience = axios.post(`/dining_experiences`, diningExperienceParams).then((response)=>{
    browserHistory.push(`/user/${response.data.user.id}/my_dining_experiences`)
    return response
  })
  return{
    type: 'CREATE_DINING_EXPERIENCE',
    payload: diningExperience
  }
}


export const fetchAvaliableListings = (searchParams) => {
  const availableListings = axios.get(`/reservations`,{params: searchParams}).then( (response) => {
    return response
  })
  return {
    type: "FETCH_AVAILABLE_LISTINGS",
    payload: availableListings
  }
}

export const reserveDiningExperience = (reservationParams) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const reservationRequest = axios.post(`/reservations`, reservationParams).then( (response) => {
    browserHistory.push(`/reservation-finder`)
    return response
  })
  return {
    type: "REQUEST_RESERVATION",
    payload: reservationRequest
  }
}
// user/1/my-experiences/1
export const diningExperienceShow = (diningExperienceId) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const diningExperience = axios.get(`/dining_experiences/${diningExperienceId}`).then((response) => {
    return response
  })
  return {
    type: "FETCH_DINING_EXPERIENCE_INFO",
    payload: diningExperience
  }
}

export const fetchMyDiningExperiences = (userId) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const myDiningExperiences = axios.get(`/users/${userId}/my_dining_experiences`).then((response) => {
    return response
  })
  return {
    type: "FETCH_MY_DINING_EXPERIENCES",
    payload: myDiningExperiences
  }
}

export const fetchMyReservations = () => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const myReservations = axios.get(`/my_reservations`).then((response) => {
    return response
  })
  return {
    type: "FETCH_MY_RESERVATIONS",
    payload: myReservations
  }
}

export const editDiningExperience = (diningExperienceId) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const currentDiningExperience = axios.get(`/dining_experiences/${diningExperienceId}`).then((response) => {
    return response
  })
  return {
    type: "EDIT_MY_DINING_EXPERIENCE",
    payload: currentDiningExperience
  }
}

export const updateDiningExperience = ( updateParams, userId ) => {

  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const diningExperience = axios.put(`/dining_experiences/${updateParams.id}`, updateParams).then( (response) => {
    browserHistory.push(`/user/${userId}/my_dining_experiences`)
    return response
  })
  console.log(diningExperience)
  return {
    type: "EDIT_MY_DINING_EXPERIENCES ",
    payload: diningExperience
  }
}

// export const showMyDiningExperience = (props) => {
//   axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
//   const myDiningExperiences = axios.get(`/users/${userId}/my_dining_experiences/`).then((response) => {
//     return response
//   })
//   return {
//     type: "FETCH_MY_DINING_EXPERIENCES",
//     payload: myDiningExperiences
//   }
// }

// if (response.error) {
//   return {
//     type: 'USER_EXISTS',
//     payload: response
//   }
// } else {
//   return{
//     type: 'CREATE_USER',
//     payload: response
//     }
//   }
