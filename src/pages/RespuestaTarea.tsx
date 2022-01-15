import { getCourseAssignments } from 'api/getCourseAssignments';
import { AxiosResponse } from 'axios';
import { Assignment } from 'common/types';
import TareaDetalles from 'components/TareaDetalles/TareaDetalles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RespuestaTarea = () => {
  const { cursoId } = useParams();
  const { tareaId } = useParams();
  const [tarea, setTarea] = useState<Assignment>({
    id: 0,
    course: 0,
    title: '',
    description: '',
    creation_timestamp: '',
    file: undefined,
    due_datetime: '',
  });
  console.log(cursoId);
  console.log(tareaId);
  console.log(tarea.id);

  useEffect(() => {
    getCourseAssignments(cursoId ? cursoId : '').then(
      (response: AxiosResponse) => {
        setTarea(response.data);
        console.log(response.data);
      }
    );
  }, []);
  return (
    <>
      <TareaDetalles
        tareaId={tareaId ? tareaId : ''}
        cursoId={cursoId ? cursoId : ''}
      />
    </>
  );
};
export default RespuestaTarea;
