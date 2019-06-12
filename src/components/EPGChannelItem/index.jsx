import React from 'react'
import styles from './EPGChannelItem.scss'
import EPGScheduleItem from '../EPGScheduleItem'

const EPGChannelItem = props => {
  let inlineStyle = { backgroundImage: `url(${props.images.logo})` }
  let schedules = props.schedules.map(item => (
    <EPGScheduleItem
      key={item.id}
      time={props.time}
      clickHandler={props.handleScheduleClick}
      {...item}
    />
  ))

  return (
    <li className={styles.EPGChannelItem}>
      <h2 style={inlineStyle}>{props.title}</h2>
      <ul className={styles.scheduleList}>{schedules}</ul>
    </li>
  )
}

export default EPGChannelItem
