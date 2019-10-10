import { EPG_DATA_REQUESTED, EPG_DATA_SUCCESS } from './actionTypes'

import { fetchEPGSuccess } from './actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../services'

function* fetchEPGData(action) {
  try {
    const json = yield fetch('/epg.json').then(response => response.json())
    yield put(fetchEPGSuccess(json))
  } catch (e) {
    // Better to handle errors crudely than not at all
    alert(
      'Unable to load EPG data. Please check your Internet connection and try again!'
    )
  }
}

function* apiSaga() {
  yield takeLatest('EPG_DATA_REQUESTED', fetchEPGData)
}

export default apiSaga
