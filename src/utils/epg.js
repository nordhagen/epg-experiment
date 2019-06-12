// In order to simulate a working progress bar and
// displaying a list of currently ongoing shows we need
// to set clock time artificially to a point in time
// where the mock EPG data has shows scheduled. To do that
// we need to know the total time span of the EPG data.

export const findFirstAndLastScheduleItems = channels => {
  let showsOnly = [].concat.apply([], channels.map(ch => ch.schedules))
  showsOnly.sort((a, b) => new Date(a.start) > new Date(b.start))
  return {
    first: showsOnly[0],
    last: showsOnly[showsOnly.length - 1]
  }
}

// Instances of the same component need unique keys in
// React. Since the schedule items in the EPG data set
// should have been unique anyway, let's make sure they
// are so we can use them as keys.

export const makeIdsUnique = data => {
  return data.channels.map(el => {
    el.id += Math.random()
    el.schedules = el.schedules.map(item => {
      item.id += Math.random()
      return item
    })
    return el
  })
}

// Originally thought to help with adding a boolean to all
// scheduled shows to state whether the show is currently
// live or not, but decided to go with a virtual clock
// inside the app instead to simulate actual time. This
// logic then had to be put in the individual schedule
// item's render functio instead.

export const markAsLive = (channelsOriginal, currentDate) => {
  channels = channelsOriginal.slice()
  for (let i = 0; i < channels.length; i++) {
    let ch = channels[i]
    for (let j = 0; j < ch.schedules.length; j++) {
      const item = ch[j]
      item.isLive =
        new Date(item.start) <= currentDate && currentDate <= new Date(item.end)
    }
  }
  return channels
}
