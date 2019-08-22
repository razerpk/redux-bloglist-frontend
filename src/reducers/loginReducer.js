/*import loginService from '../services/login'
import blogService from '../services/blogs'

const reducer = (state = null, action) => {
  console.log('action :', action)
  switch (action.type) {
  case 'LOGIN':
    return action.data
  default: return state
  }
}

export const initializeLogin = (nameAndPass) => {
  return async dispatch => {
    const user = await loginService.login(nameAndPass)
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    await blogService.setToken(user)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export default reducer*/