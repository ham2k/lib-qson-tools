export type CallInfo = {
  call?: string
  name?: string
  entityName?: string
  country?: string
  city?: string
  state?: string
  county?: string
  cqZone?: number
  ituZone?: number
  grid?: string
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
  line?: number
}

