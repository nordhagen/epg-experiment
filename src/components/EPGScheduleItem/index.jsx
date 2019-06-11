import React from 'react'
import moment from 'moment'
import styles from './EPGScheduleItem'

const EPGScheduleItem = props => {
  let now = moment(props.time)
  let className = styles.EPGScheduleItem
  if (now.isBetween(moment(props.start), moment(props.end))) {
    className += styles.EPGScheduleItemLive
  }

  return (
    <li className={className}>
      <h3>{props.title}</h3>
      <p>{moment(props.start).format()}</p>
    </li>
  )
}

export default EPGScheduleItem
