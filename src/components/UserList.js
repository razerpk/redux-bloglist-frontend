import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

const UserList = (props) => {

  // Need to wait users to be fetched
  if(props.users.length === 0){
    return null
  }

  return (
    <div>
      <h2>Users</h2>
      <Table striped celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell><b>Name</b></Table.Cell>
            <Table.Cell><b>blogs created</b></Table.Cell>
          </Table.Row>
          {props.users.sort((a,b) => b.blogs.length - a.blogs.length).map(user => {
            return(
              <Table.Row key={user.id}>
                <Table.Cell><Link to={`/users/${user.id}`}>{user.name}</Link></Table.Cell>
                <Table.Cell>{user.blogs.length}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const ConnectedUserList = connect(
  mapStateToProps,
)(UserList)

export default ConnectedUserList