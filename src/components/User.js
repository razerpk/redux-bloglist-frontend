import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  if ( props.user === undefined) {
    return null
  }

  // find all blogs from user
  const userBlogs = props.blogs.filter(blog => blog.user.id === props.userBlog.user.id)

  return (
    <div>
      <h2>{props.user.name}</h2>

      <h3>added blogs</h3>

      <div>
        {userBlogs.map(blog =>
          <li key={blog.id}>{blog.title}</li>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    blogs: state.blogs,
    userBlog: ownProps.blog
  }
}

const ConnectedUser = connect(
  mapStateToProps,
)(User)

export default ConnectedUser