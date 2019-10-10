export const api = {
  fetchEPG: function*() {
    const json = yield fetch('/epg.json').then(response => response.json())
  }
}
