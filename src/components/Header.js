import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/case-study'>Case Study</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/nomination'>Nomination</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
