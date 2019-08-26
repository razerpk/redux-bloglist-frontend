import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import { Table } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

const BlogSite = (props) => {

  return (
    <div className='blogs'>
      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>

      <Table striped celled>
        <Table.Body>
          {props.blogs.sort((a, b) => b.likes - a.likes).map(blog =>
            <Table.Row key={blog.id}>
              <Table.Cell>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    notification: state.notification,
    blogs: state.blogs,
    user: state.user,
    blog: ownProps.blog
  }
}

const mapDispatchToProps = {
}

const ConnectedBlogSite = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSite)

export default ConnectedBlogSite