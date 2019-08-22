import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

const UserList = (props) => {

  // Need to wait blogs to be fetched
  if(props.blogs.length === 0){
    return null
  }

  // create object that looks like {user.name: {value,id}, ..., user.name: {value,id}}
  const getBlogCount = props.blogs.reduce((obj, blog) => {
    if (obj[blog.user.name] === undefined) {
      obj[blog.user.name] = {
        value: 0,
        id: blog.user.id
      }
    }
    // update amount of found blogs by 1
    obj[blog.user.name] = { ...obj[blog.user.name],  value: obj[blog.user.name].value+1 }

    return obj
  }, {})

  // object structure is changed, so it's easier to handle
  const blogCount = Object.keys(getBlogCount).map(user => ({
    user: user,
    value: getBlogCount[user].value,
    id: getBlogCount[user].id
  }))

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><b>blogs created</b></td>
          </tr>
          {blogCount.map(obj => {
            return(
              <tr key={obj.user}>
                <td><Link to={`/users/${obj.id}`}>{obj.user}</Link></td>
                <td>{obj.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs
  }
}

const ConnectedUserList = connect(
  mapStateToProps,
)(UserList)

export default ConnectedUserList