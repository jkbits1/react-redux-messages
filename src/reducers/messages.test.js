import messages from './messages'
import {
  MESSAGES_LOADING,
  MESSAGES_LOADED,
  MESSAGES_FAILED_TO_LOAD
} from '../action-creators/action-types'

describe('messages reducer', () => {
  const messagesPayload = [
    {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    },
    {
      id: 'b03569ae-ccbf-4975-8040-4daba638b407',
      userId: '16373df5-da0a-4074-8295-f916b94269f4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-11-09T05:04:58Z'
    }
  ]

  it('should set messages empty on initial undefined state', () => {
    expect(
      messages(undefined, {
        type: 'INIT' // placeholder action
      })
    ).toEqual([])
  })

  it('should return passed state on unknown action', () => {
    expect(
      messages([1, 2], {
        type: 'UNKNOWN' // placeholder action
      })
    ).toEqual([1, 2])
  })

  it('should set messages empty on messages loading', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADING
      })
    ).toEqual([])
  })

  it('should set messages on messages loaded', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADED,
        payload: messagesPayload
      })
    ).toEqual(messagesPayload)
  })

  it('should set messages empty if messages loaded does not contain payload', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADED
      })
    ).toEqual([])
  })

  it('should set messages empty on messages failed to load', () => {
    expect(
      messages([], {
        type: MESSAGES_FAILED_TO_LOAD
      })
    ).toEqual([])
  })
})
