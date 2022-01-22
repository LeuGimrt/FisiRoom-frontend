import { useContext, useEffect, useState } from 'react';
import PopupRespuesta from 'components/PopupRespuesta/PopupRespuesta';
import { Assignment } from 'common/types';
import { getAssignment } from 'api/getAssignment';
import { AxiosResponse } from 'axios';
import { formatDate } from 'common/utils/formatDate';
import { nullToString } from 'common/utils/isNull';
import { UserContext } from 'context/UserContext';
import Spinner from 'components/Spinner/Spinner';

type Props = {
  tareaId: string;
  cursoId: string;
  ownerId: string;
};
const TareaDetalles = ({ cursoId, tareaId, ownerId }: Props) => {
  const { user } = useContext(UserContext);
  const [tareadetalle, setTareadetalle] = useState<Assignment>({
    id: 0,
    course: 0,
    title: '',
    description: '',
    creation_timestamp: '',
    file: undefined,
    due_datetime: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAssignment(cursoId ? cursoId : '', tareaId ? tareaId : '').then(
      (response: AxiosResponse) => {
        setTareadetalle(response.data);
        console.log(response.data);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <Spinner />;
  }

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
              className="btn btn-secondary"
              target="_blank"
              href={nullToString(tareadetalle.file)}
            >
              Descargar archivo
            </a>
          </div>
        </div>
      </div>
      {ownerId !== String(user.id) && (
        <PopupRespuesta
          btnlabelPopup={'Entregar Tarea'}
          title={'Responder Tarea'}
        />
      )}
    </div>
  );
};
export default TareaDetalles;
