const { qsoKey } = require('./qsoKey')
const qson = require('./sampleQSON.json')

describe('qsoKey', () => {
  it('should work', () => {
    expect(qsoKey(qson.qsos[0])).toEqual('YV6IA|2021-05-21T11:44:00Z|30m|FT8|KI2D')
    expect(qsoKey(qson.qsos[1])).toEqual('N4NP|2021-05-21T11:46:00Z|30m|FT8|KI2D')
    expect(qsoKey(qson.qsos[20])).toEqual('W5APO|2021-05-21T15:31:00Z|20m|FT8|KI2D')
    expect(qsoKey(qson.qsos[50])).toEqual('VP8ADR|2021-05-22T00:31:00Z|40m|FT8|KI2D')
  })
})
