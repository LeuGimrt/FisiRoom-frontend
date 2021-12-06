import { Link } from 'react-router-dom';

const NavbarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-md-nowrap p-0 shadow">
      <div className="container-fluid">
        <Link className="navbar-brand " to="#">
          FisiRoom
        </Link>
        <div className="ml-auto " id="navbarColor01">
          <ul className="navbar-nav">
            <li className= "">
              <Link className="nav-link " to="register" >
                Registrarse
              </Link>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
};

export default NavbarLogin;
