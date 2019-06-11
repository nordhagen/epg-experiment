import { EPG_DATA_SUCCESS } from '../actionTypes'
import { markAsLive } from '../../utils/epg'

const initialState = { channels: [] }

const epg = (state = initialState, action) => {
  switch (action.type) {
    case EPG_DATA_SUCCESS: {
      const data = action.payload.channels.map(el => {
        el.id += Math.random()
        el.schedules = el.schedules.map(item => {
          item.id += Math.random()
          return item
        })
        return el
      })
      return {channels: data}
    }
    default: {
      return state
    }
  }
}

export default epg
