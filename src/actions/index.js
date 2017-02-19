import axios from 'axios'
import {browserHistory} from 'react-router'

axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const loginUser = (loginParams) => {
    const user = axios.post('/signin', loginParams).then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        browserHistory.push(`/user/${response.data.user.id}`) // THIS IS A REDIRECT IN REACT
        return response
    })

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
        browserHistory.push(`/user/${response.data.user.id}`) // THIS IS A REDIRECT IN REACT
        return response
    }) //.catch( (error) => error )
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

export const createDiningExperience = (diningExperienceParams) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const diningExperience = axios.post(`/dining_experiences`, diningExperienceParams).then((response)=>{
    return response
  })
  return{
    type: 'CREATE_DINING_EXPERIENCE',
    payload: diningExperience
  }
}

export const fetchDiningExperiences = () => {
  const diningExperiences = axios.get(`/dining_experiences`).then( (response) => {
    return response
  })
  return {
    type: "FETCH_DINING_EXPERIENCES",
    payload: diningExperiences
  }
}

export const reserveDiningExperience = (diningExperienceId) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const reservationRequest = axios.post(`/reservations`, diningExperienceId).then( (response) => {
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
