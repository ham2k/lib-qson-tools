/**
 * This key can be used to uniquely identify a QSO, by callsign, band and mode.
 *
 * In particular, it also "rounds" the time of the QSO into 10 minute "buckets"
 *
 * LoTW matches start times to within 30 minutes
 *   [source](https://lotw.arrl.org/lotw-help/key-concepts/)
 *
 * ClubLog matches times to within 15 minutes
 *   [source]*(https://clublog.freshdesk.com/support/solutions/articles/175988-checking-for-log-matches)
 */

const TIME_RESOLUTION = 5 // minutes

export function qsoKey (qso) {
  const {
    startOn,
    startOnMillis,
    endOn,
    endOnMillis,
    band,
    mode,
    our: { call: ourCall },
    their: { call: theirCall }
  } = qso

  return [roundedTimeKey(startOnMillis ?? startOn ?? endOnMillis ?? endOn), theirCall, ourCall, band, mode].join('|')
}

export function roundedTimeKey (time) {
  if (!(time instanceof Date)) {
    time = new Date(time)
  }
  const minutes = time.getUTCMinutes()
  const roundedMinutes = Math.floor(minutes / TIME_RESOLUTION) * TIME_RESOLUTION

  return (
    (time.getUTCFullYear() * 100000000)
    + ((time.getUTCMonth() + 1) * 1000000)
    + (time.getUTCDate() * 10000)
    + (time.getUTCHours() * 100)
    + roundedMinutes
  ).toString()
}
