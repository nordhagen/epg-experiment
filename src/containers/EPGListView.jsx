import React from 'react'
import styles from './EPGListView.scss'
import { connect } from 'react-redux'

class EPGListView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('list')
  }

  render(){
    return(
      <section className={styles.EPGListView} onClick={this.handleClick}>
        <div className={styles.clock}>{this.props.time.toLocaleTimeString()}</div>
      </section>
    )
  }
}

const mapStateToProps = state => ({ time: state.time })

export default connect(mapStateToProps)(EPGListView)