import React from 'react'
import PropTypes from 'prop-types'
import Message from './message'

const MessageList = ({ messages, membersLookup }) => {
  const listWidth = 880

  const list =
    messages.length > 0 ? (
      <div style={{ width: listWidth }}>
        <ul>
          {messages.map(message => {
            const messageMember = membersLookup[message.userId]
              ? membersLookup[message.userId]
              : { email: 'Member info not yet loaded', avatar: '' }

            return (
              <Message
                key={message.id}
                messageDetails={message}
                messageMember={{
                  ...messageMember,
                  avatar: messageMember.avatar || ''
                }}
              />
            )
          })}
        </ul>
      </div>
    ) : null

  return list
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      readableTime: PropTypes.string.isRequired,
      readableDate: PropTypes.string.isRequired
    })
  ),
  membersLookup: PropTypes.object
}

export default MessageList
