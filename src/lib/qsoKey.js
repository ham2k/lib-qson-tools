function qsoKey (qso) {
  const {
    startOn,
    endOn,
    band,
    mode,
    our: { call: ourCall },
    their: { call: theirCall }
  } = qso

  return [theirCall, endOn ?? startOn, band, mode, ourCall].join('|')
}

module.exports = {
  qsoKey
}
