import { combineReducers } from 'redux'
import time from './time'
import epg from './epg'

export default combineReducers({ time, epg })
