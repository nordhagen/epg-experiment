import React from 'react'
import styles from './EPGDetailView.scss'
import PropTypes from 'prop-types'

class EPGDetailView extends React.Component {
  render() {
    return (
      <section
        className={styles.EPGDetailView}
        onClick={this.props.closeDelegate}
      />
    )
  }
}

EPGDetailView.propTypes = {
  closeDelegate: PropTypes.func.isRequired
}

export default EPGDetailView
