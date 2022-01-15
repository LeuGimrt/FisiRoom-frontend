import { useEffect, useState } from 'react';
import PopupRespuesta from 'components/PopupRespuesta/PopupRespuesta';
import { Assignment } from 'common/types';
import { getAssignment } from 'api/getAssignment';
import { AxiosResponse } from 'axios';
import { BASE_URL } from 'common/constants';
import { formatDate } from 'common/utils/formatDate';
import { nullToString } from 'common/utils/isNull';
import { Link } from 'react-router-dom';

type Props = {
  tareaId: string;
  cursoId: string;
};
const TareaDetalles = ({ cursoId, tareaId }: Props) => {
  const [file, setFile] = useState(null);
  const [tareadetalle, setTareadetalle] = useState<Assignment>({
    id: 0,
    course: 0,
    title: '',
    description: '',
    creation_timestamp: '',
    file: undefined,
    due_datetime: '',
  });
  const defaultImg =
    'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png';
  console.log('pipipipi');
  useEffect(() => {
    getAssignment(cursoId ? cursoId : '', tareaId ? tareaId : '').then(
      (response: AxiosResponse) => {
        setTareadetalle(response.data);
        console.log(response.data);
      }
    );
  }, []);

  function renderFile() {
    try {
    } catch (error) {}
  }
  console.log(tareadetalle);
  return (
    <div className="col-12 border border-light p-3">
      <div className="row">
        <div className="col-12 d-flex border-bottom py-2">
          <div className="col-8 ">
            <h2>{tareadetalle.title}</h2>
            <div>
              <p>{tareadetalle.description}</p>
            </div>
          </div>
          <div className="col-4  d-flex justify-content-end  px-2 ">
            <div>
              <div>
                <h5>Fecha límite</h5>
                <p>{formatDate(tareadetalle.due_datetime)}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-2 d-flex align-items-center justify-content-center "
          style={{ height: '10rem' }}
        >
          <div className="align-self-center">
            <a
              target="_blank"
              href={nullToString(
                BASE_URL?.concat(nullToString(tareadetalle.file))
              )}
            >
              Ir al archivo
            </a>
          </div>
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
