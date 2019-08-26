import React from 'react'
import { connect } from 'react-redux'
import { Message, Container } from 'semantic-ui-react'

const Notification = (props) => {

  let type
  if(props.notification){
    type = !(props.notification.startsWith('you removed') || props.notification.startsWith('incorrect'))
      ? 'success'
      : 'error'
  }

  return (
    <Container>
      {(props.notification &&
        <Message className={type}>
          {props.notification}
        </Message>
      )}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(
  mapStateToProps,
)(Notification)

export default ConnectedNotification