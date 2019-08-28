import React from 'react'
import { connect } from 'react-redux'
import { destroyToken } from '../reducers/blogReducer'
import { setUserToNull } from '../reducers/userReducer'
import { Menu, Segment } from 'semantic-ui-react'
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
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item link>
            <Link to={'/'}>blogs</Link>
          </Menu.Item>
          <Menu.Item link id='usersPage'>
            <Link to={'/users'}>users</Link>
          </Menu.Item>
          <Menu.Item>
            {props.user.name} logged in
          </Menu.Item>
          <Menu.Item>
            <button onClick={logOut} id='logOut'>log out</button>
          </Menu.Item>
        </Menu>
      </Segment>
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