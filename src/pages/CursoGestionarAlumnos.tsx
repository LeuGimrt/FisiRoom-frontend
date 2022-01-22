import { inviteUser } from 'api/inviteUser';
import { AxiosResponse } from 'axios';
import { InvitationData } from 'common/types';
import PopupConfirmaciónAcción from 'components/PopupConfirmaciónAcción/PopupConfirmaciónAcción';
import { CourseContext } from 'context/CourseContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import PopupListaAlumnos from '../components/PopupListaAlumnos/PopupListaAlumnos';

const CursoGestionarAlumnos = () => {
  const { course } = useContext(CourseContext);

  const sendInvitation = (data: InvitationData) => {
    inviteUser(course.id, data)
      .then((response: AxiosResponse) => {
        toast.success('Se envió un correo de invitación al usuario');
      })
      .catch(() => {
        toast.error('Ocurrió un error');
      });
  };

  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row ">
          <div className="d-flex justify-content-end py-3 border-bottom">
            <PopupListaAlumnos
              btnlabelPopup={'Invitar Alumnos'}
              title={'Invite a un nuevo alumno a su clase'}
              callback={sendInvitation}
            />
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
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
