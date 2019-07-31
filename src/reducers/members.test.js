import members from './members'
import {
  MEMBERS_LOADING,
  MEMBERS_LOADED,
  MEMBERS_FAILED_TO_LOAD
} from '../action-creators/action-types'

describe('members reducer', () => {
  const membersPayload = [
    {
      id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
      firstName: 'Martin',
      lastName: 'Bradley',
      email: 'mbradley0@google.it',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      ip: '166.124.172.160'
    },
    {
      id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
      firstName: 'Helen',
      lastName: 'Hawkins',
      email: 'hhawkins1@posterous.com',
      avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      ip: '179.239.189.173'
    }
  ]

  it('should set members empty on initial undefined state', () => {
    expect(
      members(undefined, {
        type: 'INIT' // placeholder action
      })
    ).toEqual([])
  })

  it('should return passed state on unknown action', () => {
    expect(
      members([1, 2], {
        type: 'UNKNOWN' // placeholder action
      })
    ).toEqual([1, 2])
  })

  it('should set members empty on members loading', () => {
    expect(
      members([], {
        type: MEMBERS_LOADING
      })
    ).toEqual([])
  })

  it('should set members on members loaded', () => {
    expect(
      members([], {
        type: MEMBERS_LOADED,
        payload: membersPayload
      })
    ).toEqual(membersPayload)
  })

  it('should set members empty if members loaded does not contain payload', () => {
    expect(
      members([], {
        type: MEMBERS_LOADED
      })
    ).toEqual([])
  })

  it('should set members empty on members failed to load', () => {
    expect(
      members([], {
        type: MEMBERS_FAILED_TO_LOAD
      })
    ).toEqual([])
  })
})
