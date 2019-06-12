import React from 'react'
import image from './header-mock.png'

const Header = props => (
  <header className={props.className}>
    <img src={image} alt="" />
  </header>
)

export default Header
