import React from 'react'

class EPGDetailView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('detail')
  }

  render(){
    return(
      <section className="EPGDetailView" onClick={this.handleClick} />
    )
  }
}

export default EPGDetailView