import { EPG_DATA_SUCCESS } from '../actionTypes'
import { markAsLive } from '../../utils/epg'

const initialState = { channels: [] }

// Adding unique ids to the data since react list
// items need unique keys to be performant.
const makeIdsUnique = data => {
  return data.channels.map(el => {
    el.id += Math.random()
    el.schedules = el.schedules.map(item => {
      item.id += Math.random()
      return item
    })
    return el
  })
}

const epg = (state = initialState, action) => {
  switch (action.type) {
    case EPG_DATA_SUCCESS: {
      const data = makeIdsUnique(action.payload)
      return { channels: data }
    }
    default: {
      return state
    }
  }
}

export default epg
