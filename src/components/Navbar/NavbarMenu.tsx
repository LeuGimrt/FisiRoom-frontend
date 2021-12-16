import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  const closeSession = () => {
    localStorage.setItem('user-token', '');
  };
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cursos">
              Cursos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cursoscreados">
              Mis Cursos
            </Link>
          </li>
          <li className="nav-item responsive-item">
            <Link className="nav-link" to="/profile">
              Mi Perfil
            </Link>
          </li>
          <li className="nav-item responsive-item">
            <Link onClick={closeSession} className="nav-link" to="/">
              Cerrar Sesión
            </Link>
          </li>
        </ul>

        <div className="user-wrapper">
          <Link to="/">
            <img src="/assets/images/profile.jpg" alt="" />
          </Link>
          <span className="user-name">Nombre largazooooooooooooo</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Menú de usuario"
            ></button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link to="/profile" className="dropdown-item">
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link to="/" onClick={closeSession} className="dropdown-item">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
