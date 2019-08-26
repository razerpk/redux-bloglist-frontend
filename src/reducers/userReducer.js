import loginService from '../services/login'
import blogService from '../services/blogs'

const reducer = (state = null, action) => {
  switch (action.type) {
  case 'LOGIN':
    return action.data
  case 'USER_TO_NULL':
    return null
  default: return state
  }
}

export const initializeUser = (user) => {
  return async dispatch => {
    await blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const setUserToNull = () => {
  return async dispatch => {
    dispatch({
      type: 'USER_TO_NULL',
    })
  }
}

export const initializeLogin = (nameAndPass) => {
  return async dispatch => {
    const user = await loginService.login(nameAndPass)
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    await blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export default reducer