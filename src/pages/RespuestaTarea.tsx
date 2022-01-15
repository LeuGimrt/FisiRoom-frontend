import { getCourseAssignments } from 'api/getCourseAssignments';
import { AxiosResponse } from 'axios';
import { Assignment } from 'common/types';
import TareaDetalles from 'components/TareaDetalles/TareaDetalles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RespuestaTarea = () => {
  const { cursoId } = useParams();
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
  console.log(tarea);

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
      <TareaDetalles tarea={tarea} />
    </>
  );
};
export default RespuestaTarea;
