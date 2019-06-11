import React from 'react'
import './EPGListView.scss'

class EPGListView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('list')
  }

  render(){
    return(
      <section className="EPGListView" onClick={this.handleClick} />
    )
  }
}

export default EPGListView