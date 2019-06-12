import { EPG_DATA_REQUESTED, EPG_DATA_SUCCESS } from './actionTypes'

import { fetchEPGSuccess } from './actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../services'

function* fetchEPGData(action) {
  try {
    const json = yield fetch('/epg.json').then(response => response.json())
    yield put(fetchEPGSuccess(json))
  } catch (e) {
    alert(
      'Unable to load EPG data. Please check your Internet connection and try again!'
    )
  }
}

function* fetchProgrammeData(action) {
  try {
    const data = yield call(api.fetchProgramme, action.payload)
    yield put({ type: 'PROGRAMME_DATA_SUCCESS', user: user })
  } catch (e) {
    yield put({ type: 'PROGRAMME_DATA_ERROR', message: e.message })
  }
}

function* apiSaga() {
  yield takeLatest('EPG_DATA_REQUESTED', fetchEPGData)
}

export default apiSaga
