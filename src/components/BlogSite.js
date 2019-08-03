import React from 'react'
import { connect } from 'react-redux'
import { updateBlog, removeBlog, destroyToken } from '../reducers/blogReducer'
import { setUserToNull } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import Blog from './Blog'

const BlogSite = (props) => {

  const removeBlog = async (blog) => {
    props.removeBlog(blog)
    props.setNotification(`you removed ${blog.title}`, 5)
  }

  const updateLikes = async (blog) => {
    props.updateBlog(blog)
    props.setNotification(`you liked ${blog.title} by ${blog.author}`, 5)
  }

  const logOut = () => {
    console.log('props :', props)
    console.log('props.user :', props.user)
    console.log('window.localsto :', window.localStorage.getItem('loggedBlogappUser'))
    props.destroyToken()
    props.setUserToNull()
    window.localStorage.removeItem('loggedBlogappUser')
  }

  return (
    <div className='blogs'>
      <h2>blogs</h2>
      <p>
        {props.user.name} logged in
        <button onClick={logOut}>log out</button>
      </p>

      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>
      {props.blogs.sort((a, b) => b.likes - a.likes).map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          updateLikes={() => updateLikes(blog)}
          removeBlog={() => removeBlog(blog)}
          username={props.user.username}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  updateBlog,
  removeBlog,
  destroyToken,
  setUserToNull,
  setNotification
}

const ConnectedBlogSite = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSite)

export default ConnectedBlogSite