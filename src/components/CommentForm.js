import React from 'react'
import { connect } from 'react-redux'
import { addCommentToBlog } from '../reducers/blogReducer'

const CommentForm = (props) => {

  const handleAddComment = (event) => {
    event.preventDefault()
    props.addCommentToBlog(props.blog, event.target.comment.value)
    event.target.comment.value = ''
  }

  return (
    <div className='commentForm'>
      <form onSubmit={handleAddComment}>
        <input name='comment' />
        <button type="submit">add comment</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: ownProps.blog
  }
}
const mapDispatchToProps = {
  addCommentToBlog
}

const ConnectedCommentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default ConnectedCommentForm