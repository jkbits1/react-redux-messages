import { format, compareAsc } from 'date-fns'

const generateMembersLookup = members => {
  const membersLookup = {}

  if (members) {
    members.forEach(member => {
      membersLookup[member.id] = member
    })
  }

  return membersLookup
}

const generateProcessedMessages = messages => {
  const messagesWithDateInfo = messages.map(message => {
    const dateFromTimestamp = new Date(message.timestamp)
    const readableTime = format(dateFromTimestamp, 'h:MM:SS A')
    const readableDate = format(dateFromTimestamp, 'Do MMMM YYYY')

    return {
      ...message,
      dateFromTimestamp,
      readableTime,
      readableDate
    }
  })

  const messagesWithDateInfoSorted = [...messagesWithDateInfo].sort(
    (m1, m2) => {
      return compareAsc(m1.dateFromTimestamp, m2.dateFromTimestamp)
    }
  )

  const processedMessagesSorted = messagesWithDateInfoSorted.map(message => {
    const { dateFromTimestamp, ...messageWithoutDate } = message

    return messageWithoutDate
  })

  return processedMessagesSorted
}

const processedMessagesAndLookup = (
  generateMembersLookup,
  generateProcessedMessages
) => (messages, members) => {
  const membersLookup = generateMembersLookup(members)

  const processedMessagesSorted = generateProcessedMessages(messages)

  return { processedMessagesSorted, membersLookup }
}

export {
  generateMembersLookup,
  generateProcessedMessages,
  processedMessagesAndLookup
}
