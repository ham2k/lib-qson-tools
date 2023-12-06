import { qsoKey, roundedTimeKey } from './qsoKey'
import qson from './sampleQSON.json'

describe('qsoKey', () => {
  it('should work', () => {
    expect(qsoKey(qson.qsos[0])).toEqual('202105211140|YV6IA|KI2D|30m|FT8')
    expect(qsoKey(qson.qsos[1])).toEqual('202105211140|N4NP|KI2D|30m|FT8')
    expect(qsoKey(qson.qsos[20])).toEqual('202105211530|W5APO|KI2D|20m|FT8')
    expect(qsoKey(qson.qsos[50])).toEqual('202105220030|VP8ADR|KI2D|40m|FT8')
  })
})

describe('roundedTimeKey', () => {
  it('should work', () => {
    expect(roundedTimeKey('2021-05-21T11:44:00Z')).toEqual('202105211140')
    expect(roundedTimeKey('2021-05-21T23:59:59Z')).toEqual('202105212350')
    expect(roundedTimeKey('2021-05-21T23:59:59-0400')).toEqual('202105220350')
  })
})
