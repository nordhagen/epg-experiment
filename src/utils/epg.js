export const findFirstAndLastScheduleItems = channels => {
  let showsOnly = [].concat.apply([], channels.map(ch => ch.schedules))
  showsOnly.sort((a, b) => new Date(a.start) > new Date(b.start))
  return {
    first: showsOnly[0],
    last: showsOnly[showsOnly.length - 1]
  }
}

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
