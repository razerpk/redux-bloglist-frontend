import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

const User = (props) => {
  if ( props.userBlog === null) {
    return 'There is nothing to be seen'
  }

  // find all blogs from user
  const userBlogs = props.blogs.filter(blog => blog.user.id === props.userBlog.user.id)

  return (
    <div>
      <h2>{props.userBlog.user.name}</h2>

      <h3>added blogs</h3>

      <div>
        {userBlogs.map(blog =>
          <Segment vertical key={blog.id}>{blog.title}</Segment>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blogs: state.blogs,
    userBlog: ownProps.blog
  }
}

const ConnectedUser = connect(
  mapStateToProps,
)(User)

export default ConnectedUser