import { useEffect, useState } from 'react';
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
          <li className="nav-item  mr-auto ">
            <Link className="nav-link" to="/" onClick={closeSession}>
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
