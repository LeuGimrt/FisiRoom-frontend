import Button from 'components/Button/Button';
import FormRespuesta from 'components/FormRespuesta/FormRespuesta';
import PopupConfirmaciónAcción from 'components/PopupConfirmaciónAcción/PopupConfirmaciónAcción';
type Props = {
  btnlabelPopup: string;
  title: string;
};
const PopupListaAlumnos = ({ btnlabelPopup, title }: Props) => {
  return (
    <div>
      <div className="d-flex justify-content-center py-2">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {btnlabelPopup}
        </button>
      </div>
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
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
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
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <Button
                            type="button"
                            className="mx-1"
                            color="primary"
                            elevated
                          >
                            Invitar
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <Button
                            type="button"
                            className="mx-1"
                            color="primary"
                            elevated
                          >
                            Invitar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupListaAlumnos;
