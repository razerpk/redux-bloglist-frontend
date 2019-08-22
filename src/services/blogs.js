import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getConfig = () => ({
  headers: { Authorization: token }
})

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const destroyToken = () => {
  token = null
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject, getConfig())
  return response.data
}

const update = async newObject => {
  const response = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return response.data
}

const deleteBlog = async blog => {
  const response = await axios.delete(`${baseUrl}/${blog.id}`, getConfig())
  return response.data
}

const addComment = async (newCommentedBlog) => {
  const response = await axios.post(
    `${baseUrl}/${newCommentedBlog.id}/comments`,
    newCommentedBlog,
  )
  return response.data
}
export default { getAll, create, update, setToken, deleteBlog, destroyToken, addComment }