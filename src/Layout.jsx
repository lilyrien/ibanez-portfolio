import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="site-layout">
      <header className="site-header">
        <NavLink className="site-logo" to="/">
          Jethro Ibanez
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2025 Jethro Maverick B. Ibanez</p>
        <p>BSIT 3D · Gordon College</p>
      </footer>
    </div>
  )
}

export default Layout
