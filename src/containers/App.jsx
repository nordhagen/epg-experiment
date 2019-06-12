import React from 'react'
import styles from './App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clockTick, fetchEPG, closeModal } from '../state/actions'
import { CLOCK_TICK_FREQUENCY } from '../config'

import EPGListView from './EPGListView'
import EPGDetailView from './EPGDetailView'
import Header from '../components/Header'
import TabBar from '../components/TabBar'

const tickInterval = 0
const tickDuration = 1000

class App extends React.Component {

  componentDidMount() {
    this.tickInterval = setInterval(
      () => this.props.clockTick(CLOCK_TICK_FREQUENCY),
      CLOCK_TICK_FREQUENCY
    )
    this.props.fetchEPG()
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval)
  }

  render() {
    return (
      <div className={styles.App}>
        <Header className={styles.Header} />
        <main className={styles.main}>
          <EPGListView handleClick={this.handleViewClick} />
          {this.props.nav.modal !== null && (
            <EPGDetailView
              data={this.props.nav.modal}
              closeDelegate={this.props.closeModal}
            />
          )}
        </main>
        <TabBar className={styles.TabBar} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clockTick, fetchEPG, closeModal }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
