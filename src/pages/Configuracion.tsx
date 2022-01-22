import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Wrapper from 'containers/Wrapper/Wrapper';
import { Outlet } from 'react-router';

const options = [
  { label: 'Daltónicos', route: 'color' },
  { label: 'Fuente', route: 'fuente' },
  { label: 'Cursor', route: 'cursor' },
];

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
            className="container card my-3 p-2 w-100 justify-content-center position-static"
          >
            <div className="row py-1 ">
              <div className="col-12 col-sm-2 col-md-3">
                <Menu options={options} path="/configuracion" />
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
