import React from 'react'
import mockupImage from '../../mockups/details page EPG Future.png'

class EPGDetailView extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick('detail')
  }

  render(){
    return(
      <img onClick={this.handleClick} src={mockupImage} alt=""/>
    )
  }
}

export default EPGDetailView