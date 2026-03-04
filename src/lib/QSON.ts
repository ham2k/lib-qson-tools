export type CallInfo = {
  call: string

  // Related to callsign parsing (see `@ham2k/lib-callsigns`)
  baseCall?: string
  prefix?: string
  prefixOverride?: string
  ituPrefix?: string
  digit?: string
  preindicator?: string
  postindicators?: string[]
  indicators?: string[]

  // Related to DXCC Info (see `@ham2k/lib-country-files`)
  entityPrefix?: string
  entityName?: string
  dxccCode?: number
  continent?: string
  cqZone?: number
  ituZone?: number
  regionCode?: string
  gmtOffset?: number
  matchSource?: string
  matchNote?: string

  // Related to location
  locSource?: string
  lat?: number
  lon?: number
  grid?: string

  // Other common attributes
  name?: string
  city?: string
  state?: string
  county?: string
  country?: string

  guess?: CallInfo
}

export type RefInfo = {
  type: string
  ref?: string
  label?: string
}

export type QSLInfo = {
  type: string
  ref?: string
  label?: string
  received?: boolean
}

export type QSON = {
  our: CallInfo
  their: CallInfo
  freq: number
  band: string
  mode: string
  startAt?: string
  startAtMillis?: number
  endAt?: string
  endAtMillis?: number
  number?: number
  line?: number,
  refs?: RefInfo[]
  qsl?: QSLInfo[]
}
