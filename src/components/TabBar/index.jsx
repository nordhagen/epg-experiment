import React from 'react'
import image from './tab-bar-mock.png'

const TabBar = props => (
  <nav className={props.className}>
    <img src={image} alt="" />
  </nav>
)

export default TabBar
