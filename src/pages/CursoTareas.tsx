import { Link, useParams } from 'react-router-dom';
import Button from 'components/Button/Button';
import CardItemsTarea from 'components/CardItemsTarea/CardItemsTarea';
import { useEffect, useState } from 'react';
import { getCourseAssignments } from 'api/getCourseAssignments';
import { AxiosResponse } from 'axios';
import { Assignment } from 'common/types';

const CursoTareas = () => {
  const { cursoId } = useParams();
  const [tareas, setTareas] = useState<Assignment[]>([]);
  //logica
  useEffect(() => {
    getCourseAssignments(cursoId ? cursoId : '').then(
      (response: AxiosResponse) => {
        setTareas(response.data);
        console.log(response.data);
      }
    );
  }, []);
  //respuesta
  return (
    <>
      <div className="col-9 border border-light p-3">
        <div className="row ">
          <div className="d-flex justify-content-end py-3 border-bottom">
            <Link to="crear">
              <Button type="button" className="mx-1" color="primary" elevated>
                Crear nueva Tarea
              </Button>
            </Link>
          </div>
        </div>
        <CardItemsTarea tareas={tareas} />
      </div>
    </>
  );
};
export default CursoTareas;
