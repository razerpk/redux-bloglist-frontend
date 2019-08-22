import React from 'react'
import { connect } from 'react-redux'
import { initializeLogin } from '../reducers/userReducer'

const LoginForm = (props) => {

  const handleLogin = (event) => {
    event.preventDefault()

    props.initializeLogin({
      username: event.target.username.value,
      password: event.target.password.value
    })
  }

  return (
    <div className='loginForm'>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input name='username' />
        </div>
        <div>
          password
          <input type='password' name='password' />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  initializeLogin
}

const ConnectedBlogForm = connect(
  null,
  mapDispatchToProps
)(LoginForm)

export default ConnectedBlogForm