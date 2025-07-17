import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <ul className="nav__collection">
          <NavLink to={'/'} className={'nav__link'}>
            Home
          </NavLink>
          <NavLink to={'/users'} className={'nav__link'}>
            Users
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
