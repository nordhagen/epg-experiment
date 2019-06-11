import { CLOCK_TICK } from '../actionTypes'

const initialState = new Date('2018-10-26T20:00:00+02:00')

const time = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_TICK: {
      return new Date(state.getTime() + action.payload.increment)
    }
    default: {
      return state
    }
  }
}

export default time
