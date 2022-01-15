import Button from 'components/Button/Button';
import Wrapper from 'containers/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import Form from 'components/Form/Form';
import FormRespuesta from 'components/FormRespuesta/FormRespuesta';
import PopupRespuesta from 'components/PopupRespuesta/PopupRespuesta';
import { Assignment } from 'common/types';

type Props = {
  tarea: Assignment;
};
const TareaDetalles = ({ tarea }: Props) => {
  const [tareadetalle, setTareadetalle] = useState<Assignment>({
    id: 0,
    course: 0,
    title: 'F',
    description: '',
    creation_timestamp: '',
    file: undefined,
    due_datetime: '',
  });
  useEffect(() => {
    setTareadetalle(tarea);
  }, []);
  console.log(tarea);
  console.log(tareadetalle);
  console.log(tareadetalle.course);
  return (
    <div className="col-9 border border-light p-3">
      <div className="row">
        <div className="col-12 d-flex border-bottom py-2">
          <div className="col-8 ">
            <h2>{tareadetalle['title']}</h2>
            <div>
              <p>{tarea.description}</p>
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
      </div>
      <PopupRespuesta
        btnlabelPopup={'Entregar Tarea'}
        title={'Responder Tarea'}
      />
    </div>
  );
};
export default TareaDetalles;
