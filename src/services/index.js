export const api = {
  fetchEPG: function*() {
    const json = yield fetch('/epg.json').then(response => response.json())
  },

  fetchProgramme: function*(id) {
    const json = yield fetch('/program_live.json').then(response =>
      response.json()
    )
  }
}
