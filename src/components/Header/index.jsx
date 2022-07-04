import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
        <Link className="link" to={`/Home`}>Home</Link>
        <Link className="link" to={'/About'}>About</Link>
        <Link className="link" to={'/Docs'}>Docs</Link>
    </nav>
  )
}

export default Header;