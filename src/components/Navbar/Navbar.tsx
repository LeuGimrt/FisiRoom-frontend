import './Navbar.scss';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const showButtons = () => {
    return (
      <>
        <Link to="/login">
          <Button className="mx-1" color="info" elevated>
            Iniciar Sesión
          </Button>
        </Link>
        <Link to="/register">
          <Button className="mx-1" color="secondary" elevated>
            Registrarme
          </Button>
        </Link>
      </>
    );
  };

  const showUser = () => {
    return <div>Usuario logeado</div>;
  };

  return (
    <header className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HoloSchool
        </Link>
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
              <Link className="nav-link" to="#">
                Mis Cursos
              </Link>
            </li>
            <li className="nav-item  mr-auto ">
              <Link className="nav-link" to="/">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
          {localStorage.getItem('token') ? showUser() : showButtons()}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
