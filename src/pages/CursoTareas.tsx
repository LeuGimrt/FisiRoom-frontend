import { Link, useParams } from 'react-router-dom';
import Button from 'components/Buttons/Button/Button';
import CardItemsTarea from 'components/CardItemsTarea/CardItemsTarea';
import { useContext, useEffect, useState } from 'react';
import { getCourseAssignments } from 'api/getCourseAssignments';
import { AxiosResponse } from 'axios';
import { Assignment, Curso } from 'common/types';
import { getCourseDetails } from 'api/getCourseDetails';
import Spinner from 'components/Spinner/Spinner';
import { UserContext } from 'context/UserContext';

const CursoTareas = () => {
  const { cursoId } = useParams();
  const { user } = useContext(UserContext);
  const [tareas, setTareas] = useState<Assignment[]>([]);
  const [loading, setloading] = useState(true);
  const [owner, setOwner] = useState('');
  //logica
  useEffect(() => {
    getCourseAssignments(cursoId ? cursoId : '').then(
      (response: AxiosResponse) => {
        setTareas(response.data);
        console.log(response.data);
      }
    );
    getCourseDetails(cursoId ? cursoId : '').then(
      (response: AxiosResponse<Curso>) => {
        setOwner(response.data.owner);
        setloading(false);
      }
    );
  }, []);
  //respuesta
  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row ">
          <div className="d-flex justify-content-end py-3 border-bottom">
            {loading ? (
              <Spinner />
            ) : (
              owner === String(user.id) && (
                <Link to="crear">
                  <Button
                    type="button"
                    className="mx-1"
                    color="primary"
                    elevated
                  >
                    Crear nueva Tarea
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
        <CardItemsTarea tareas={tareas} />
      </div>
    </>
  );
};
export default CursoTareas;
