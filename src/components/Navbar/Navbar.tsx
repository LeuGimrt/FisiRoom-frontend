import './Navbar.scss';
import { useEffect, useState } from 'react';
import NavbarLogin from './NavbarLogin';
import NavbarMenu from './NavbarMenu';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
<<<<<<< Updated upstream
  let token;
  useEffect(() => {
    token = localStorage.getItem('user-token');
  }, [token]);
  const showAccessButtons = () => {
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
=======
  const [sessionActive, setSessionActive] = useState(false);
  useEffect(() => {
    (() => {
      if (localStorage.getItem('token') != '') {
        setSessionActive(true);
        console.log('start');
      }
      console.log(sessionActive);
    })();
  }, []);

  const showButtons = () => {
    return <NavbarLogin />;
>>>>>>> Stashed changes
  };
  const showUser = () => {
    return <NavbarMenu />;
  };
  return (
    <header className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HoloSchool
        </Link>
<<<<<<< Updated upstream
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
              <Link
                className="nav-link"
                onClick={() => {
                  localStorage.removeItem('user-token');
                }}
                to="/"
              >
                Cerrar Sesión
              </Link>
            </li>
          </ul>
          {token ? showUser() : showAccessButtons()}
        </div>
=======
        {localStorage.getItem('token') ? showUser() : showButtons()}
>>>>>>> Stashed changes
      </div>
    </header>
  );
};

export default Navbar;
