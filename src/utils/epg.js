// Using JS Date objects here instead of moment.js to keep utils portable

export const findFirstAndLastScheduleItems = channels => {
  let showsOnly = [].concat.apply([], channels.map(ch => ch.schedules))
  showsOnly.sort((a, b) => new Date(a.start) > new Date(b.start))
  return {
    first: showsOnly[0],
    last: showsOnly[showsOnly.length - 1]
  }
}

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
