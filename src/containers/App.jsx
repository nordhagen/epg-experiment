import React from 'react'
import EPGListView from './EPGListView'
import EPGDetailView from './EPGDetailView'
import styles from './App.scss'
import { Provider } from 'react-redux'
import store from '../state/store'

const VIEW_MAP = {
  'list'    : EPGListView,
  'detail'  : EPGDetailView
}

class App extends React.Component {
  state = {
    currentView: 'list'
  }

  handleViewClick = (origin) => {
    let newView = (origin === 'list')
      ? 'detail'
      : 'list'

    this.setState({currentView:newView})
  }

  render(){
    let View = VIEW_MAP[this.state.currentView]
    return(
      <Provider store={store}>
        <main className={styles.EPG}>
          <View handleClick={this.handleViewClick} />
        </main>
      </Provider>
    )
  }
}

export default App