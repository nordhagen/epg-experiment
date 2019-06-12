import React from 'react'
import { connect } from 'react-redux'
import styles from './EPGListView.scss'
import EPGChannelItem from '../components/EPGChannelItem'
import { SHOW_CLOCK } from '../config'
import { bindActionCreators } from 'redux'
import { openModal } from '../state/actions'

class EPGListView extends React.Component {
  render() {
    let channels = []
    if (this.props.channels.length) {
      let time = this.props.time
      channels = this.props.channels.map(d => (
        <EPGChannelItem
          key={d.id}
          time={time}
          selectDelegate={this.props.openModal}
          {...d}
        />
      ))
    }

    let clockTime = this.props.time.toLocaleTimeString()

    return (
      <section className={styles.EPGListView}>
        {SHOW_CLOCK && <div className={styles.clock}>{clockTime}</div>}
        {channels.length && <ul>{channels}</ul>}
      </section>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openModal }, dispatch)

const mapStateToProps = state => ({
  time: state.time,
  channels: state.epg.channels
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EPGListView)
