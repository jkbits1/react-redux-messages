import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import memoize from 'memoize-one'

import { loadMessages } from '../action-creators/messages'
import { loadMembers } from '../action-creators/members'

import {
  generateMembersLookup,
  generateProcessedMessages,
  processedMessagesAndLookup
} from './messagesProcessor'
import MessageList from './messageList'

class Home extends React.Component {
  memoGenerateMembersLookup = memoize(generateMembersLookup)
  memoGenerateProcessedMessages = memoize(generateProcessedMessages)
  memoProcessMessagesAndGenerateLookup = memoize(
    processedMessagesAndLookup(
      this.memoGenerateMembersLookup,
      this.memoGenerateProcessedMessages
    )
  )

  componentDidMount() {
    this.props.loadMessages()
    this.props.loadMembers()
  }

  render() {
    const { messages, members } = this.props

    const {
      processedMessagesSorted,
      membersLookup
    } = this.memoProcessMessagesAndGenerateLookup(messages, members)

    return (
      <div>
        This is Test
        <MessageList
          messages={processedMessagesSorted}
          membersLookup={membersLookup}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ messages, members }) => {
  return {
    messages,
    members
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadMessages, loadMembers }, dispatch)
}

Home.propTypes = {
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
