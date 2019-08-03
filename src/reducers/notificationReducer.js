const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'NEW_NOTIFICATION':
    return action.message
  case 'CLEAR':
    return null
  default:
    return state
  }
}

export const setNotification = (message, time) => {
  return async dispatch => {
    await dispatch({
      type: 'NEW_NOTIFICATION',
      message
    })

    await setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, time * 1000)

  }
}

export default notificationReducer