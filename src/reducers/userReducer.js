
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

export default reducer