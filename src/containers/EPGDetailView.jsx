import React from 'react'
import styles from './EPGDetailView.scss'

class EPGDetailView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('detail')
  }

  render(){
    return(
      <section className={styles.EPGDetailView} onClick={this.handleClick} />
    )
  }
}

export default EPGDetailView