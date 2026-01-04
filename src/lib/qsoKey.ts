import { QSON } from './QSON'

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

export function qsoKey(qso: QSON): string {
  const {
    startAt,
    startAtMillis,
    endAt,
    endAtMillis,
    band,
    mode,
    our: { call: ourCall },
    their: { call: theirCall }
  } = qso

  return [roundedTimeKey(startAtMillis ?? startAt ?? endAtMillis ?? endAt), theirCall, ourCall, band, mode].join('|')
}

export function roundedTimeKey(time: Date | string | number | undefined): string {
  let dateTime: Date
  if (!time) {
    dateTime = new Date()
  } else if (!(time instanceof Date)) {
    dateTime = new Date(time)
  } else {
    dateTime = time
  }
  const minutes = dateTime.getUTCMinutes()
  const roundedMinutes = Math.floor(minutes / TIME_RESOLUTION) * TIME_RESOLUTION

  return (
    (dateTime.getUTCFullYear() * 100000000)
    + ((dateTime.getUTCMonth() + 1) * 1000000)
    + (dateTime.getUTCDate() * 10000)
    + (dateTime.getUTCHours() * 100)
    + roundedMinutes
  ).toString()
}

