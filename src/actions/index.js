import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:8080/v1/'

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then( (userData) => {
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push(`/user/${userData.data.id}`) // THIS IS A REDIRECT IN REACT
    return userData
  }).catch( (error) => error )
console.log(response)
response.error ? {type: 'USER_EXIST', payload: response} : { type: 'CREATE_USER', payload: response }
}
