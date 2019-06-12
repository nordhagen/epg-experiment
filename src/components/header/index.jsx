import React from 'react'
import image from './header-mock.png'
import PropTypes from 'prop-types'

const Header = ({ className }) => (
  <header className={className}>
    <img src={image} alt="" />
  </header>
)

Header.propTypes = {
  className: PropTypes.string.isRequired
}

export default Header
