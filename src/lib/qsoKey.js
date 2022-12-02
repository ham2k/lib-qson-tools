function qsoKey(qso) {
  const {
    start,
    end,
    band,
    mode,
    our: { call: ourCall },
    their: { call: theirCall },
  } = qso

  return [theirCall, end ?? start, band, mode, ourCall].join("|")
}

module.exports = {
  qsoKey,
}
