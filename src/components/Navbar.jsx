import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        n11 Bootcamp
      </NavLink>
      <nav className="nav-links" aria-label="Ana menü">
        <NavLink to="/" end>
          Ürünler
        </NavLink>
        <NavLink to="/cart">Sepet</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
