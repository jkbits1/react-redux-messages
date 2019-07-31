import React from 'react'
import { shallow, mount } from 'enzyme'

import Message from './message'

it('renders correctly with message and default member', () => {
  const props = {
    messageDetails: {
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      readableTime: '4:02:00 AM',
      readableDate: '9th February 2017'
    },
    messageMember: {
      email: 'Member info not yet loaded',
      avatar: ''
    }
  }
  const tree = shallow(<Message {...props} />)
  expect(tree).toMatchSnapshot()
})

it('renders correctly with message and member', () => {
  const props = {
    messageDetails: {
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      readableTime: '4:02:00 AM',
      readableDate: '9th February 2017'
    },
    messageMember: {
      email: 'arosec@bbb.org',
      avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
    }
  }
  const tree = shallow(<Message {...props} />)
  expect(tree).toMatchSnapshot()
})

it('adds a new item', () => {
  const props = {
    messageDetails: {
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      readableTime: '4:02:00 AM',
      readableDate: '9th February 2017'
    },
    messageMember: {
      email: 'arosec@bbb.org',
      avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff'
    }
  }

  const tree = shallow(<Message {...props} />)

  tree.find('li').simulate('mouseEnter')

  expect(tree.find('li')).toHaveLength(1)
  expect(
    tree
      .find('li')
      .find('div')
      .last()
      .text()
  ).toEqual('arosec@bbb.org')

  tree.find('li').simulate('mouseLeave')
  expect(
    tree
      .find('li')
      .find('div')
      .last()
      .text()
  ).toEqual(
    ' Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.'
  )
})
