import { qsoKey, roundedTimeKey } from './qsoKey'
import qson from './sampleQSON.json'

describe('qsoKey', () => {
  it('should work', () => {
    expect(qsoKey(qson.qsos[0])).toEqual('202105211140|YV6IA|KI2D|30m|FT8')
    expect(qsoKey(qson.qsos[1])).toEqual('202105211145|N4NP|KI2D|30m|FT8')
    expect(qsoKey(qson.qsos[20])).toEqual('202105211530|W5APO|KI2D|20m|FT8')
    expect(qsoKey(qson.qsos[50])).toEqual('202105220030|VP8ADR|KI2D|40m|FT8')
  })
})

describe('roundedTimeKey', () => {
  it('should work', () => {
    expect(roundedTimeKey('2021-05-21T11:39:00Z')).toEqual('202105211135')
    expect(roundedTimeKey('2021-05-21T11:40:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T11:41:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T11:42:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T11:43:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T11:44:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T11:45:00Z')).toEqual('202105211145')
    expect(roundedTimeKey('2021-05-21T11:46:00Z')).toEqual('202105211145')
    expect(roundedTimeKey('2021-05-21T11:47:00Z')).toEqual('202105211145')
    expect(roundedTimeKey('2021-05-21T11:48:00Z')).toEqual('202105211145')
    expect(roundedTimeKey('2021-05-21T11:49:00Z')).toEqual('202105211145')
    expect(roundedTimeKey('2021-05-21T11:50:00Z')).toEqual('202105211150')
    expect(roundedTimeKey('2021-05-21T11:51:00Z')).toEqual('202105211150')

    expect(roundedTimeKey('2021-05-21T23:59:59Z')).toEqual('202105212355')
    expect(roundedTimeKey('2021-05-21T23:59:59-0400')).toEqual('202105220355')
  })
})
