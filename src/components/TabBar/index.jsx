// This view is entirely in mock state

import React from 'react'
import image from './tab-bar-mock.png'
import PropTypes from 'prop-types'

const TabBar = ({ className }) => (
  <nav className={className}>
    <img src={image} alt="" />
  </nav>
)

TabBar.propTypes = {
  className: PropTypes.string.isRequired
}

export default TabBar
