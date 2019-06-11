import { CLOCK_TICK } from '../actionTypes'

const initialState = new Date()

const time = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_TICK: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default time
