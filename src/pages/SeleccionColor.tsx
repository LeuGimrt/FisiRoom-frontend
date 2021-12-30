import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper';
import React from 'react';

const SeleccionColor = () => {
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
              <div className="col-3">
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Información
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Fuente
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Cursor
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Brillo
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                  >
                    Daltónicos
                  </a>
                </div>
              </div>
              <div className="col-9">
                <h4>
                  Escoja la paleta de colores que se le acomode mejor y presione
                  el botón "Guardar"
                </h4>
                <div className="row">
                  <div className="col btn ">
                    <input
                      className="btn-check"
                      type="radio"
                      name="exampleRadios"
                      id="option1"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="option1">
                      <img src="/assets/images/col1.png" alt="" />
                    </label>
                  </div>
                  <div className="col btn">
                    <input
                      className="btn-check"
                      type="radio"
                      name="exampleRadios"
                      id="option2"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="option2">
                      <img src="/assets/images/col2.png" alt="" />
                    </label>
                  </div>
                  <div className="col btn">
                    <input
                      className="btn-check"
                      type="radio"
                      name="exampleRadios"
                      id="option3"
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary" htmlFor="option3">
                      <img src="/assets/images/col3.png" alt="" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                    <Button
                      color="secondary"
                      size="lg"
                      type="submit"
                      className="px-auto"
                    >
                      Revertir
                    </Button>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <Button
                      color="primary"
                      size="lg"
                      type="submit"
                      className="px-auto"
                    >
                      Guardar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SeleccionColor;
