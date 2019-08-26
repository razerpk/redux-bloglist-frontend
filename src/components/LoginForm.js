import React from 'react'
import { connect } from 'react-redux'
import { initializeLogin } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'semantic-ui-react'

const LoginForm = (props) => {

  const handleLogin = (event) => {
    event.preventDefault()

    props.initializeLogin({
      username: event.target.username.value,
      password: event.target.password.value
    })
  }

  const inputStyle = {
    width: '60%',
    border: '2px solid black'
  }

  return (
    <div>
      <h2>Log in to application</h2>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>username</label>
          <input name='username' style={ inputStyle }/>
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input type='password' name='password' style={ inputStyle }/>
        </Form.Field>
        <Button type="submit">login</Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  initializeLogin,
  setNotification
}

const ConnectedBlogForm = connect(
  null,
  mapDispatchToProps
)(LoginForm)

export default ConnectedBlogForm