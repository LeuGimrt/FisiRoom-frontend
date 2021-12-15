import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';

const NavbarLogin = () => {
  return (
    <>
      <div className="ml-auto">
        <div className=" collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav">
            <li>
              <Link to="/login">
                <Button className="mx-1" color="info" elevated>
                  Iniciar Sesión
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Button className="mx-1" color="secondary" elevated>
                  Registrarme
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
    </>
  );
};

export default NavbarLogin;
