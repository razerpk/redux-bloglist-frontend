import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'REMOVED_TOKEN':
    return state
  case 'NEW_BLOG':
    return [ ...state, action.data ]
  case 'ADD_LIKE_TO_BLOG':  {
    const id = action.data.id
    return state.map(blog =>
      blog.id !== id ? blog : action.data
    )
  }
  case 'ADD_COMMENT_TO_BLOG': {
    const id = action.data.id
    return state.map(blog =>
      blog.id !== id ? blog : action.data
    )
  }
  case 'REMOVE_BLOG':  {
    const id = action.data.id
    return state.filter(blog => blog.id !== id)
  }
  default: return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const removeBlog = (blog) => {
  return async dispatch => {
    await blogService.deleteBlog(blog)
    dispatch({
      type: 'REMOVE_BLOG',
      data: blog
    })
  }
}

export const updateBlog = (blog) => {
  return async dispatch => {
    const addLike = {
      ...blog,
      likes: blog.likes + 1
    }
    let updatedBlog = await blogService.update(addLike)

    dispatch({
      type: 'ADD_LIKE_TO_BLOG',
      data: updatedBlog
    })
  }
}

export const addCommentToBlog = (blog, comment) => {
  return async dispatch => {
    const addComment = {
      ...blog,
      comments: blog.comments === null ? comment : blog.comments.concat(comment)
    }
    let updatedBlog = await blogService.addComment(addComment)

    dispatch({
      type: 'ADD_COMMENT_TO_BLOG',
      data: updatedBlog
    })
  }
}

export const destroyToken = () => {
  return async dispatch => {
    await blogService.destroyToken()
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch({
      type: 'REMOVED_TOKEN',
    })
  }
}

export const setToken = (token) => {
  return async dispatch => {
    console.log('token :', token)
    await blogService.setToken(token)
    dispatch({
      type: 'SET_TOKEN',
    })
  }
}

export default reducer