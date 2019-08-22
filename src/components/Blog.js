import React from 'react'
import { connect } from 'react-redux'
import { updateBlog, removeBlog, addCommentToBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import CommentForm from './CommentForm'
import {
  withRouter
} from 'react-router-dom'

const Blog = (props) =>  {

  // key value for comment iterating
  let temp = 0
  if ( props.blog === undefined) {
    return null
  }

  const areYouSure = () => {
    if (window.confirm(`remove blog ${props.blog.title} by ${props.blog.author}`))
    {removeBlog()}
    props.history.push('/')
  }

  const removeBlog = () => {
    props.removeBlog(props.blog)
    props.setNotification(`you removed ${props.blog.title}`, 5)
  }

  const updateLikes = () => {
    props.updateBlog(props.blog)
    props.setNotification(`you liked ${props.blog.title} by ${props.blog.author}`, 5)
  }

  const showRemoveButton = props.user.username === props.blog.user.username
    ? <button onClick={areYouSure}>remove</button>
    : null

  return (
    <div className='blog'>
      <div>
        <h1>{props.blog.title} {props.blog.author}</h1>
      </div>
      <div>
        <div>{props.blog.url}</div>
        <div>
          {props.blog.likes} likes
          <button onClick={() => updateLikes()}>like</button>
        </div>
        <div>added by {props.blog.user.name} </div>
        {showRemoveButton}
      </div>
      <h3>comments</h3>
      <div>
        <CommentForm blog={props.blog}/>
        {props.blog.comments.map(comment => {
          temp++
          return (
            <li key={temp}>
              {comment}
            </li>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    blog: ownProps.blog
  }
}

const mapDispatchToProps = {
  updateBlog,
  removeBlog,
  setNotification,
  addCommentToBlog
}

const ConnectedBlog = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog))

export default ConnectedBlog