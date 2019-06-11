import React from 'react'
import EPGListView from './EPGListView'
import EPGDetailView from './EPGDetailView'
import styles from './App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clockTick, fetchEPG } from '../state/actions'

import Header from '../components/Header'
import TabBar from '../components/TabBar'

const tickInterval = 0
const tickDuration = 60000

const VIEW_MAP = {
  list: EPGListView,
  detail: EPGDetailView
}

class App extends React.Component {
  state = {
    currentView: 'list'
  }

  componentDidMount() {
    this.tickInterval = setInterval(
      () => this.props.clockTick(tickDuration),
      tickDuration
    )
    this.props.fetchEPG()
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval)
  }

  handleViewClick = origin => {
    let newView = origin === 'list' ? 'detail' : 'list'

    this.setState({ currentView: newView })
  }

  render() {
    let View = VIEW_MAP[this.state.currentView]
    return (
      <div className={styles.App}>
        <Header className={styles.Header} />
        <main className={styles.main}>
          <View handleClick={this.handleViewClick} />
        </main>
        <TabBar className={styles.TabBar} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clockTick, fetchEPG }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
