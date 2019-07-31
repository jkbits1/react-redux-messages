import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Message = ({
  messageDetails: { message, readableTime, readableDate },
  messageMember
}) => {
  const [showHover, setShowHover] = useState(false)

  const dateTimeWidth = 280
  const avatarWidth = 120
  const messageWidth = 170
  const emailWidth = 240
  const liPadding = 10
  const dateLeftPadding = 15
  const avatarTextLeftPadding = 10

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        padding: liPadding,
        border: 'solid 1px black',
        listStyle: 'none'
      }}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}>
      <div style={{ width: dateTimeWidth }}>
        {readableTime}
        <span style={{ paddingLeft: dateLeftPadding }}>{readableDate}</span>
      </div>
      {messageMember.avatar ? (
        <div style={{ width: avatarWidth }}>
          <img alt="user avatar" src={messageMember.avatar} />
        </div>
      ) : (
        <div
          style={{
            width: avatarWidth,
            overflowWrap: 'normal',
            paddingLeft: avatarTextLeftPadding
          }}>
          No image available
        </div>
      )}
      <div style={{ width: messageWidth }}> {message}</div>
      {showHover ? (
        <div
          style={{
            fontWeight: 'bold',
            textAlign: 'right',
            width: emailWidth
          }}>
          {messageMember.email}
        </div>
      ) : null}
    </li>
  )
}

Message.propTypes = {
  messageDetails: PropTypes.shape({
    message: PropTypes.string.isRequired,
    readableTime: PropTypes.string.isRequired,
    readableDate: PropTypes.string.isRequired
  }),
  messageMember: PropTypes.shape({
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  })
}

export default Message
