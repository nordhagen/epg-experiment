import { CLOCK_TICK } from './actionTypes'

export const clockTick = time => ({
  type: CLOCK_TICK,
  payload: new Date()
});