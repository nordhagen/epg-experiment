import React from 'react'
import moment from 'moment'
import styles from './style.scss'

const FMT = 'HH:MM'

const EPGScheduleItem = props => {
  let now = moment(props.time),
    startTime = moment(props.start),
    endTime = moment(props.end),
    isLive = now.isBetween(startTime, endTime),
    className = styles.EPGScheduleItem,
    duration = endTime.diff(startTime),
    durationHours = duration / (60 * 60 * 1000)

  let inlineStyle = {
    width: durationHours * 80 + '%'
  }

  let trackStyle
  if (isLive) {
    className += ' ' + styles.EPGScheduleItemLive
    let elapsed = endTime.diff(now)
    let progress = 1 - elapsed / duration
    trackStyle = {
      width: Math.round(progress * 100) + '%'
    }
  }

  return (
    <li
      style={inlineStyle}
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
