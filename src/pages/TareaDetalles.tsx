import Button from 'components/Button/Button';
import Wrapper from 'containers/Wrapper/Wrapper';
import { useState } from 'react';
import Form from 'components/Form/Form';

const TareaDetalles = () => {
  const [popup, setPopup] = useState(false);
  const [cursos, setCursos] = useState('asd');

  const PopUp = () => {
    console.log('inciando popUp');
    setPopup(true);
    return null;
  };

  const PopDown = () => {
    console.log('cerrando popUp');
    setPopup(false);
    return null;
  };

  function renderPopUp(popup: boolean) {
    console.log(popup);
    if (popup) {
      return <></>;
    }
  }
  return (
    <div className="col-9 border border-light p-3">
      <div className="row">
        <div className="col-12 d-flex border-bottom py-2">
          <div className="col-8 ">
            <h2>Titulo de la Tarea</h2>
            <div>
              <p>Descripción de la tarea</p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div>
              <div>
                <h5>Fecha límite</h5>
              </div>
              <div>
                <b>entregado</b>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 border-bottom pb-4  " style={{ height: '5rem' }}>
          <div>contenedor del archivo subido por el profesor</div>
        </div>
        <div className="col-12">
          <div>
            <p>contenedor del modulo para subir tarea</p>
            <Button
              type="button"
              className="mx-1 d-flex justify-content-center"
              color="primary"
              elevated
              onClick={PopUp}
            >
              Btn de Entregar o Editar Tarea
            </Button>
          </div>
        </div>
        {renderPopUp(popup)}
      </div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Btn de Entregar o Editar Tarea
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TareaDetalles;
