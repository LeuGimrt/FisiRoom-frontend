import { getCourseAssignments } from 'api/getCourseAssignments';
import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { Assignment, Curso } from 'common/types';
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
  const [owner, setOwner] = useState('');

  useEffect(() => {
    getCourseAssignments(cursoId ? cursoId : '').then(
      (response: AxiosResponse) => {
        setTarea(response.data);
        console.log(response.data);
      }
    );
    getCourseDetails(cursoId ? cursoId : '').then(
      (response: AxiosResponse<Curso>) => {
        setOwner(response.data.owner);
      }
    );
  }, []);
  return (
    <>
      <TareaDetalles
        tareaId={tareaId ? tareaId : ''}
        cursoId={cursoId ? cursoId : ''}
        ownerId={owner}
      />
    </>
  );
};
export default RespuestaTarea;
