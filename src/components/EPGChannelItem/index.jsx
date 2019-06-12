import React from 'react'
import styles from './style.scss'
import EPGScheduleItem from '../EPGScheduleItem'

const EPGChannelItem = ({ title, images, schedules, time, selectDelegate }) => {
  let scheduleEls = schedules.map(item => (
    <EPGScheduleItem
      key={item.id}
      time={time}
      selectDelegate={selectDelegate}
      {...item}
    />
  ))

  let inlineStyle = { backgroundImage: `url(${images.logo})` }

  return (
    <li className={styles.EPGChannelItem}>
      <h2 style={inlineStyle}>{title}</h2>
      <ul className={styles.scheduleList}>{scheduleEls}</ul>
    </li>
  )
}

export default EPGChannelItem
