import loginService from '../services/login'

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
    dispatch({
      type: 'LOGIN',
      data: nameAndPass
    })
  }
}

export default reducer