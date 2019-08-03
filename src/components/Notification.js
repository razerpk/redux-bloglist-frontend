import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  let type
  if(props.notification){
    type = !props.notification.startsWith('you removed')
      ? 'success'
      : 'error'
  }

  return (
    <div className={type}>
      {props.notification}
    </div>
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