import './Navbar.scss';
import { useEffect, useState } from 'react';
import NavbarLogin from './NavbarLogin';
import NavbarMenu from './NavbarMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sessionActive, setSessionActive] = useState(false);
  useEffect(() => {
    (() => {
      if (localStorage.getItem('user-token') !== '') {
        setSessionActive(true);
        console.log('start');
      }
      console.log(sessionActive);
    })();
  }, []);

  const showButtons = () => {
    return <NavbarLogin />;
  };
  const showUser = () => {
    return <NavbarMenu />;
  };
  return (
    <header className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div className="container-fluid  ">
        <Link className="navbar-brand" to="/">
          HoloSchool
        </Link>
        {localStorage.getItem('user-token') ? showUser() : showButtons()}
      </div>
    </header>
  );
};

export default Navbar;
