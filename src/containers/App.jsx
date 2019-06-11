import React from 'react'
import EPGListView from './EPGListView'
import EPGDetailView from './EPGDetailView'
import styles from './App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clockTick, fetchEPG } from '../state/actions'

const tickInterval = 0

const VIEW_MAP = {
  list: EPGListView,
  detail: EPGDetailView
}

class App extends React.Component {
  state = {
    currentView: 'list'
  }

  componentDidMount() {
    this.tickInterval = setInterval(this.props.clockTick, 1000)
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
      <main className={styles.EPG}>
        <View handleClick={this.handleViewClick} />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clockTick, fetchEPG }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
