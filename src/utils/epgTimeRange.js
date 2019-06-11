export default (json) => {
  let showsOnly = [].concat.apply([], json.channels.map(ch => ch.schedules))
  showsOnly.sort((a, b) => new Date(a.start) > new Date(b.start))
  console.log('first', showsOnly[0]);
  console.log('last', showsOnly[showsOnly.length - 1]);
}