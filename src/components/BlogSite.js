import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import {
  Link
} from 'react-router-dom'

const BlogSite = (props) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div className='blogs'>

      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>
      {props.blogs.sort((a, b) => b.likes - a.likes).map(blog =>
        <div key={blog.id} style={blogStyle}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blogs: state.blogs,
    user: state.user,
    blog: ownProps.blog
  }
}

const ConnectedBlogSite = connect(
  mapStateToProps
)(BlogSite)

export default ConnectedBlogSite