import Button from 'components/Buttons/Button/Button';
import FormRespuesta from 'components/FormRespuesta/FormRespuesta';
import PopupConfirmaciónAcción from 'components/PopupConfirmaciónAcción/PopupConfirmaciónAcción';
import { useState } from 'react';
type Props = {
  btnlabelPopup: string;
  title: string;
  callback: Function;
};
const PopupListaAlumnos = ({ btnlabelPopup, title, callback }: Props) => {
  const [data, setData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.currentTarget.className += ' was-validated';
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      callback(data);
    }
  };

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
              <form onSubmit={handleSubmit} className="form-group my-3">
                <label className="form-label">
                  Ingrese el correo del alumno
                </label>
                <div className="d-flex">
                  <input
                    maxLength={40}
                    minLength={1}
                    className="form-control"
                    type="email"
                    id={'email'}
                    name={'email'}
                    placeholder={'Ingrese el correo del alumno'}
                    onChange={handleInputChange}
                    required={true}
                  />
                  <button
                    type="submit"
                    className="btn bg-primary text-light mx-5"
                  >
                    Invitar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupListaAlumnos;
