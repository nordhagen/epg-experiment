import React from 'react'
import moment from 'moment'
import styles from './EPGScheduleItem'

const FMT = 'HH:MM'

const EPGScheduleItem = props => {
  let now = moment(props.time)
  let startTime = moment(props.start)
  let endTime = moment(props.end)
  let isLive = now.isBetween(startTime, endTime)
  let className = styles.EPGScheduleItem
  let trackStyle

  if (isLive) {
    className += ' ' + styles.EPGScheduleItemLive
    let duration = endTime.diff(startTime)
    let elapsed = endTime.diff(now)
    let progress = 1 - elapsed / duration
    trackStyle = {
      width: Math.round(progress * 100) + '%'
    }
  }

  return (
    <li
      className={className}
      onClick={e => {
        props.selectDelegate(props)
      }}
    >
      <h3>{props.title}</h3>
      <p className={styles.timeSlot}>
        {moment(props.start).format(FMT)} – {moment(props.end).format(FMT)}
      </p>

      {isLive && (
        <div className={styles.progressBar}>
          <div style={trackStyle} className={styles.track} />
        </div>
      )}
    </li>
  )
}

export default EPGScheduleItem
