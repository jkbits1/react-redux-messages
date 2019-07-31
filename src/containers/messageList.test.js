import React from 'react'
import { shallow } from 'enzyme'

import MessageList from './messageList'

it('renders correctly with no messages or members', () => {
  const props = {
    messages: [],
    membersLookup: {}
  }
  const tree = shallow(<MessageList {...props} />)
  expect(tree).toMatchSnapshot()
})

it('renders correctly with messages and no members', () => {
  const props = {
    messages: [
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        message:
          'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        timestamp: '2017-02-09T04:27:38Z',
        readableTime: '4:02:00 AM',
        readableDate: '9th February 2017'
      },
      {
        id: 'b03569ae-ccbf-4975-8040-4daba638b407',
        userId: '16373df5-da0a-4074-8295-f916b94269f4',
        message:
          'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-11-09T05:04:58Z',
        readableTime: '5:11:00 AM',
        readableDate: '9th November 2016'
      }
    ],
    membersLookup: {}
  }

  const tree = shallow(<MessageList {...props} />)
  expect(tree).toMatchSnapshot()
})

it('renders correctly with messages and members', () => {
  const props = {
    messages: [
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        message:
          'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        timestamp: '2017-02-09T04:27:38Z',
        readableTime: '4:02:00 AM',
        readableDate: '9th February 2017'
      },
      {
        id: 'b03569ae-ccbf-4975-8040-4daba638b407',
        userId: '16373df5-da0a-4074-8295-f916b94269f4',
        message:
          'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-11-09T05:04:58Z',
        readableTime: '5:11:00 AM',
        readableDate: '9th November 2016'
      }
    ],
    membersLookup: {
      'fe27b760-a915-475c-80bb-7cdf14cc6ef3': {
        id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        firstName: 'Albert',
        lastName: 'Rose',
        email: 'arosec@bbb.org',
        avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
        ip: '20.79.231.223'
      },
      '16373df5-da0a-4074-8295-f916b94269f4': {
        id: '16373df5-da0a-4074-8295-f916b94269f4',
        firstName: 'Larry',
        lastName: 'Owens',
        email: 'lowensm@earthlink.net',
        avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
        ip: '168.43.167.194'
      }
    }
  }

  const tree = shallow(<MessageList {...props} />)
  expect(tree).toMatchSnapshot()
})
