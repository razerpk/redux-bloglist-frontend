import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'semantic-ui-react'

const BlogForm = (props) => {

  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value
    }
    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''
    props.createBlog(blogObject)
    props.setNotification(`added blog ${blogObject.title} by ${blogObject.author}`, 5)
  }

  return (
    <div>
      <Form onSubmit={addBlog}>
        <Form.Field>
          <label>title:</label>
          <input name='title' id='title'/>
        </Form.Field>
        <Form.Field>
          <label>author:</label>
          <input name='author' id='author'/>
        </Form.Field>
        <Form.Field>
          <label>url:</label>
          <input name='url' id='url'/>
        </Form.Field>
        <div>
          <Button type='submit'>create</Button>
        </div>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  createBlog,
  setNotification
}

const ConnectedBlogForm = connect(
  null,
  mapDispatchToProps
)(BlogForm)

export default ConnectedBlogForm