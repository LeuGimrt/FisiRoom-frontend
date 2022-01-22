type Props = {
  id: number;
  title?: string;
  btnTitle: string;
  children: React.ReactNode;
  onConfirm: Function;
  buttonContent: React.ReactNode;
  buttonColor?: string;
};

const ConfirmationModal = ({
  id,
  title = '',
  btnTitle,
  children,
  onConfirm,
  buttonContent,
  buttonColor = 'primary',
}: Props) => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        title={btnTitle}
        type="button"
        className={`btn btn-${buttonColor}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {buttonContent}
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {title && (
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
            )}

            <div className="modal-body">{children}</div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  onConfirm(id);
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
