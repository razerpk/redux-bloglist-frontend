import React from 'react'
import { connect } from 'react-redux'
import { destroyToken } from '../reducers/blogReducer'
import { setUserToNull } from '../reducers/userReducer'
import {
  Link, withRouter
} from 'react-router-dom'

const NavMenu = (props) => {

  const logOut = () => {
    props.destroyToken()
    props.setUserToNull()
    props.history.push('/')
  }

  return (
    <div>
      <Link to={'/'}>blogs</Link>
      <Link to={'/users'}>users</Link>
      {props.user.name} logged in
      <button onClick={logOut}>log out</button>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  destroyToken,
  setUserToNull
}

const ConnectedNavMenu = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu))

export default ConnectedNavMenu