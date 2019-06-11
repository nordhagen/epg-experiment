import React from 'react'
import { connect } from 'react-redux'
import styles from './EPGListView.scss'
import EPGChannelItem from '../components/EPGChannelItem'
import { SHOW_CLOCK } from '../config'

class EPGListView extends React.Component {
  handleClick = e => {
    e.preventDefault()
    this.props.handleClick('list')
  }

  render() {
    let channels = []
    if (this.props.channels.length) {
      let time = this.props.time
      channels = this.props.channels.map(d => (
        <EPGChannelItem key={d.id} time={time} {...d} />
      ))
    }

    let clockTime = this.props.time.toLocaleTimeString()

    return (
      <section className={styles.EPGListView} onClick={this.handleClick}>
        {SHOW_CLOCK && 
          <div className={styles.clock}>{clockTime}</div>
        }
        {channels.length && <ul>{channels}</ul>}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  time: state.time,
  channels: state.epg.channels
})

export default connect(mapStateToProps)(EPGListView)
