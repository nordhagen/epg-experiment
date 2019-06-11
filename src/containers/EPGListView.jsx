import React from 'react'
import styles from './EPGListView.scss'

class EPGListView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('list')
  }

  render(){
    return(
      <section className={styles.EPGListView} onClick={this.handleClick} />
    )
  }
}

export default EPGListView