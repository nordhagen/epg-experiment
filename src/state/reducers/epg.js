import { EPG_DATA_SUCCESS } from '../actionTypes'
import { markAsLive } from '../../utils/epg'

const initialState = { channels: [] }

const epg = (state = initialState, action) => {

  switch (action.type) {
    case EPG_DATA_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default epg
