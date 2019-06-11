import { CLOCK_TICK, EPG_DATA_REQUESTED, EPG_DATA_SUCCESS } from './actionTypes'

export const clockTick = increment => ({
  type: CLOCK_TICK,
  payload: { increment }
})

export const fetchEPG = () => ({
  type: EPG_DATA_REQUESTED
})

export const fetchEPGSuccess = epg => {
  return {
    type: EPG_DATA_SUCCESS,
    payload: epg
  }
}
