import React from 'react'
import { connect } from 'react-redux'
import { destroyToken } from '../reducers/blogReducer'
import { setUserToNull } from '../reducers/userReducer'
import NavMenu from './NavMenu'
import {
  withRouter
} from 'react-router-dom'

const Header = () => {

  return (
    <div>
      <NavMenu />
      <h1>blog app</h1>
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

const ConnectedHeader = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))

export default ConnectedHeader