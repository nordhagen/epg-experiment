import React from 'react'
import mockupImage from '../../mockups/EPG_small.png'

class EPGListView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('list')
  }

  render(){
    return(
      <img onClick={this.handleClick} src={mockupImage} alt=""/>
    )
  }
}

export default EPGListView