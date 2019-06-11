import { CLOCK_TICK, EPG_DATA_REQUESTED, EPG_DATA_SUCCESS } from './actionTypes'

export const clockTick = time => ({
  type: CLOCK_TICK,
  payload: new Date()
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
