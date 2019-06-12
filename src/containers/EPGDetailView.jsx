import React from 'react'
import styles from './EPGDetailView.scss'

class EPGDetailView extends React.Component {
  render() {
    return (
      <section className={styles.EPGDetailView} onClick={this.props.closeDelegate} />
    )
  }
}

export default EPGDetailView
