import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

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
      <form onSubmit={addBlog}>
        <div>
          title:
          <input name='title'/>
        </div>
        <div>
          author:
          <input name='author'/>
        </div>
        <div>
          Url:
          <input name='url'/>
        </div>
        <div>
          <button type='submit'>create</button>
        </div>
      </form>
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