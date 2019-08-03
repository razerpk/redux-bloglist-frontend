import React from 'react'
import { connect } from 'react-redux'
import { initializeLogin } from '../reducers/loginReducer'
import { setToken } from '../reducers/blogReducer'



const LoginForm = (props) => {
  const handleLogin = (event) => {
    event.preventDefault()

    props.initializeLogin({
      username: event.target.username.value,
      password: event.target.password.value
    })

    console.log('props.login :', props.login)
    props.setToken(props.login.token)
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

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = {
  initializeLogin,
  setToken
}

const ConnectedBlogForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default ConnectedBlogForm