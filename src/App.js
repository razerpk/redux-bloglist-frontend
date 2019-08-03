import React, { useEffect } from 'react'
import BlogSite from './components/BlogSite'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser } from './reducers/userReducer'
import { setToken } from './reducers/blogReducer'


const App = (props) => {

  useEffect(() => {
    props.initializeBlogs()
  }, []) // eslint-disable-line

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.initializeUser(user)
      props.setToken(user.token)
    }
  }, []) // eslint-disable-line

  return (
    props.user === null
      ?
      <div>
        <Notification/>
        <LoginForm />
      </div>
      :
      <div>
        <Notification/>
        <BlogSite />
      </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps, { initializeBlogs, initializeUser, setToken }
)(App)
