import React from 'react'
import moment from 'moment'
import styles from './style.scss'
import PropTypes from 'prop-types'

const FMT = 'HH:MM'

const EPGScheduleItem = ({ id, title, time, start, end, selectDelegate }) => {
  let now = moment(time),
    startTime = moment(start),
    endTime = moment(end),
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
      onClick={e => selectDelegate(id)}
    >
      <h3>{title}</h3>
      <p className={styles.timeSlot}>
        {moment(start).format(FMT)} – {moment(end).format(FMT)}
      </p>

      {isLive && (
        <div className={styles.progressBar}>
          <div style={trackStyle} className={styles.track} />
        </div>
      )}
    </li>
  )
}

EPGScheduleItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  selectDelegate: PropTypes.func.isRequired
}

export default EPGScheduleItem
