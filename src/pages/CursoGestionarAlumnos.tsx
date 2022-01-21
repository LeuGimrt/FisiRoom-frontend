import Button from 'components/Button/Button';
import PopupConfirmaciónAcción from 'components/PopupConfirmaciónAcción/PopupConfirmaciónAcción';
import { Link } from 'react-router-dom';
import PopupListaAlumnos from '../components/PopupListaAlumnos/PopupListaAlumnos';

const CursoGestionarAlumnos = () => {
  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row ">
          <div className="d-flex justify-content-end py-3 border-bottom">
            <PopupListaAlumnos
              btnlabelPopup={'Invitar Alumnos'}
              title={'Invite a un nuevo alumno a su clase'}
            />
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Nro.</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">
                    <div className="d-flex justify-content-center">
                      Opciones
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <PopupConfirmaciónAcción
                        btnlabelPopup={'Eliminar'}
                        title={'¿Está seguro que desea eliminar al alumno?'}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>Alumnos registrados</p>
      </div>
    </>
  );
};
export default CursoGestionarAlumnos;
