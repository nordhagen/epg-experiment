import React from 'react'
import styles from './EPGListView.scss'
import { connect } from 'react-redux'

class EPGListView extends React.Component {
  handleClick = e => {
    e.preventDefault()
    this.props.handleClick('list')
  }

  render() {
    let channels = []
    if (this.props.channels.length) {
      channels = this.props.channels.map(d => <li key={d.id}>{d.title}</li>)
    }

    let clockTime = this.props.time.toLocaleTimeString()

    return (
      <section className={styles.EPGListView} onClick={this.handleClick}>
        {/* <div className={styles.clock}>{clockTime}</div> */}
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
