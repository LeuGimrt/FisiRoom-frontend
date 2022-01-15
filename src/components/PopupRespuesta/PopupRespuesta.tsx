import FormRespuesta from 'components/FormRespuesta/FormRespuesta';
type Props = {
  btnlabelPopup: string;
  title: string;
};
const PopupRespuesta = ({ btnlabelPopup, title }: Props) => {
  return (
    <div>
      {/* Button trigger modal */}
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
              <FormRespuesta />
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
export default PopupRespuesta;
