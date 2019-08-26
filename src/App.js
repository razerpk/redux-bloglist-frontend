import React, { useEffect } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import BlogSite from './components/BlogSite'
import User from './components/User'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser } from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'
import { Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = (props) => {

  useEffect(() => {
    props.initializeBlogs()
  }, []) // eslint-disable-line

  useEffect(() => {
    props.initializeUsers()
  }, []) // eslint-disable-line

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.initializeUser(user)
    }
  }, []) // eslint-disable-line

  //returns blog that contains user information used in <User /> or null
  const userBlogById = (id) => {
    const blog = props.blogs.find(blog => blog.user.id === id)
    return blog ? blog : null
  }

  // Returns blog that is used in <Blog />
  const blogById = (id) => {
    return props.blogs.find(blog => blog.id === id)
  }

  return (
    props.user === null
      ?
      <div>
        <Notification/>
        <Container className='loginform'>
          <Router>
            <Route exact path="/" render={() => <LoginForm />} />
          </Router>
        </Container>
      </div>
      :
      <div>
        <Notification/>
        <Container>
          <Router>
            <Header />
            <Route exact path="/" render={() => <BlogSite />} />
            <Route exact path="/users" render={() => <UserList />} />
            <Route exact path="/users/:id" render={({ match }) =>
              <User blog={userBlogById(match.params.id)}/>
            } />
            <Route exact path="/blogs/:id" render={({ match }) =>
              <Blog blog={blogById(match.params.id)}/>
            } />
          </Router>
        </Container>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

export default connect(
  mapStateToProps, { initializeBlogs, initializeUser, initializeUsers }
)(App)
