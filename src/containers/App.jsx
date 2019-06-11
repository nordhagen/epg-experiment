import React from 'react'
import EPGListView from './EPGListView'
import EPGDetailView from './EPGDetailView'

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
      <View handleClick={this.handleViewClick} />
    )
  }
}

export default App