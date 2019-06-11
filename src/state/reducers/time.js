import { CLOCK_TICK } from "../actionTypes";

const initialState = Date.now();

const time = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_TICK: {
      return action.payload.time;
    }
    default: {
      return state;
    }
  }
};

export default time;