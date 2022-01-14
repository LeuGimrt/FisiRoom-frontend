import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';
import { Link, Outlet } from 'react-router-dom';

const Configuracion = () => {
  return (
    <Wrapper>
      <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ maxWidth: '1300px' }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Header>Configuración</Header>
          <div
            style={{ maxWidth: '1300px' }}
            className="container card my-3 p-2 w-100 justify-content-center"
          >
            <div className="row py-1 ">
              <div className="col-12 col-sm-2 col-md-3">
                <div className="list-group">
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Información
                  </Link>
                  <Link
                    to="/configuracion/fuente"
                    className="list-group-item list-group-item-action"
                  >
                    Fuente
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Cursor
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Brillo
                  </Link>
                  <Link
                    to="/configuracion/color"
                    className="list-group-item list-group-item-action"
                  >
                    Daltónicos
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-9">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Configuracion;
